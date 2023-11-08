package com.example.not.controller.user;
import com.example.not.jwt.JwtTokenProvider;
import com.example.not.model.entity.ERole;
import com.example.not.model.entity.Roles;
import com.example.not.model.entity.Users;
import com.example.not.payload.request.LoginRequest;
import com.example.not.payload.request.SignupRequest;
import com.example.not.payload.response.JwtResponse;
import com.example.not.payload.response.MessageResponse;
import com.example.not.security.CustomUserDetails;
import com.example.not.service.user.RoleService;
import com.example.not.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/auth")
public class UserController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenProvider tokenProvider;
    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;
    @Autowired
    private PasswordEncoder encoder;
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest){
        if (userService.existsByUserName(signupRequest.getUserName())){
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already"));
        }
        if (userService.existsByEmail(signupRequest.getEmail())){
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already"));
        }
        Users user = new Users();
        user.setUserName(signupRequest.getUserName());
        System.out.println(signupRequest);
        user.setPassWord(encoder.encode(signupRequest.getPassWord()));
        user.setEmail(signupRequest.getEmail());
        user.setPhone(signupRequest.getPhone());
        user.setUserStatus(true);
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Date dateNow = new Date();
        String strNow = sdf.format(dateNow);
        try {
            user.setCreated(sdf.parse(strNow));
        }catch (Exception ex){
            ex.printStackTrace();
        }
        Set<String> strRoles = signupRequest.getListRoles();
        Set<Roles> listRoles = new HashSet<>();
        if (strRoles == null){
            //User quyền mặc định
            Roles userRole = roleService.findByRoleName(ERole.ROLE_USER).orElseThrow(()->new RuntimeException("Error: Role is not found"));
            listRoles.add(userRole);
        }else {
            strRoles.forEach(role ->{
                switch (role){
                    case "admin":
                        Roles adminRole = roleService.findByRoleName(ERole.ROLE_ADMIN)
                                .orElseThrow(()->new RuntimeException("Error: Role is not found admin"));
                        listRoles.add(adminRole);
                    case "business":
                        Roles businessRole = roleService.findByRoleName(ERole.ROLE_BUSINESS)
                                .orElseThrow(()->new RuntimeException("Error: Role is not found business"));
                        listRoles.add(businessRole);
                    case "user":
                        Roles userRole = roleService.findByRoleName(ERole.ROLE_USER)
                                .orElseThrow(()->new RuntimeException("Error: User is not found user"));
                        listRoles.add(userRole);
                }
            });
        }
        user.setListRoles(listRoles);
        userService.saveOrUpdate(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }
    @PostMapping("/signin")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUserName(),loginRequest.getPassWord())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        CustomUserDetails customUserDetails =(CustomUserDetails) authentication.getPrincipal();
        //Sing jwt trả về cho client
        String jwt = tokenProvider.generateToken(customUserDetails);
        System.out.println(jwt);
        //Lấy các quyên của user
        List<String> listRoles = customUserDetails.getAuthorities().stream()
                .map(item -> item.getAuthority()).collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt,customUserDetails.getUsername(),customUserDetails.getEmail(),
                customUserDetails.getPhone(),listRoles));
    }
}
