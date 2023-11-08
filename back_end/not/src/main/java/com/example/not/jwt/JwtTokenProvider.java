package com.example.not.jwt;

import com.example.not.security.CustomUserDetails;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {
    @Value("${ra.jwt.secret}")
    private String JWT_SECRET;
    @Value(("${ra.jwt.expiration}"))
    private long JWT_EXPIRATION;

    //    Tạo jwt từ thông tin user
    public String generateToken(CustomUserDetails customUserDetails){
        Date now = new Date();
        Date dateExpired = new Date(now.getTime()+JWT_EXPIRATION);
        //Tao ra chuoi json web token tu username của user;
        return Jwts.builder()
                .setSubject(customUserDetails.getUsername())
                .setIssuedAt(now)
                .setExpiration(dateExpired)
                .signWith(SignatureAlgorithm.HS512,JWT_SECRET)
                .compact();
    }

    //Lay thong tin user tu jwt
    public String getUserNameFromJwt(String token){
        Claims claims = Jwts.parser().setSigningKey(JWT_SECRET)
                .parseClaimsJws(token).getBody();

        //tra lại thông tin username
        return claims.getSubject();
    }
    //Validate thong tin cua Jwt
    public boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(JWT_SECRET)
                    .parseClaimsJws(token);
            return true;
        }catch (MalformedJwtException ex){
            log.error("Invalid jwt token");
        }catch (ExpiredJwtException ex){
            log.error("expired jwt token");
        }catch (UnsupportedJwtException ex){
            log.error("unsupportd jwt token");
        }catch (IllegalArgumentException ex){
            log.error("jwt claims string is empty");
        }
        return false;
    }
}
