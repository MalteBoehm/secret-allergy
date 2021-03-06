package com.secretallergy.app.security;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

@Service
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtUtils jwtUtils;

    @Autowired
    public JwtAuthFilter(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        // get token
        /*response.setHeader("Access-Control-Allow-Origin","*");*/
        String authorization = request.getHeader("Authorization");
        if(authorization == null || authorization.isBlank()){
            filterChain.doFilter(request, response);
            return;
        }

        // validate token
        String token = authorization.replace("Bearer ", "").trim();
        try {
            Claims claims = jwtUtils.parseToken(token);
            if(!jwtUtils.isExpired(claims)){
                SecurityContextHolder.getContext()
                        .setAuthentication(
                                new UsernamePasswordAuthenticationToken(
                                        claims.getSubject(),
                                        "",
                                        Collections.emptyList()));
            }
        }catch (Exception e){
            System.out.println(e);
        }
        filterChain.doFilter(request,response);
    }
}
