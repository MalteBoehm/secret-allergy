package com.secretallergy.app.security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
public class JwtUtils {

    @Value("${jwt.secretkey}")
    private String key;

    public String createJwtToken(String username, HashMap<String,Object> claims){
     log.debug("createJwtToken(username={},claims={})", username,claims);
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(Duration.ofHours(2))))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
    }

    public Claims parseToken(String token){
        return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
    }

    public boolean isExpired(Claims claims) {
        return claims.getExpiration().before(new Date());
    }
}
