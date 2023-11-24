package com.example.not.controller.user;

import com.example.not.model.user.ERole;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/test")
public class TestController {
    ERole abc;
    @GetMapping("/all")
    public String allAccess(){
        abc = ERole.ROLE_BUSINESS;
        return "Public Content";
    }
    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('BUSINESS') or hasRole('ADMIN')")
    public String userAccess(){
        return "User Content";
    }
    @GetMapping("/business")
    @PreAuthorize("hasRole('BUSINESS') or hasRole('ADMIN')")
    public String businessAccess(){
        return "Business board";
    }
    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess(){
        return "Admin board";
    }
}

