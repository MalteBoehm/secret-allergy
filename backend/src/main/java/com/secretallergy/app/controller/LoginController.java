package com.secretallergy.app.controller;

import com.secretallergy.app.dto.AppUserLoginDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import com.secretallergy.app.security.JwtUtils;

import java.util.HashMap;
@Slf4j
@RestController
@RequestMapping(path = "auth/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }



    @CrossOrigin
    @PostMapping
    public String login(@RequestBody AppUserLoginDto appUserLoginDto){
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            appUserLoginDto.getUsername(),
                            appUserLoginDto.getPassword()));
            return jwtUtils.createJwtToken(appUserLoginDto.getUsername(), new HashMap<>());

        } catch(Exception e){
            log.error("Failed to login", e);
           throw new UsernameNotFoundException("Nutzer wer bitte...?");
        }
    }
}
