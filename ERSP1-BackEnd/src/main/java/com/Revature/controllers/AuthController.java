package com.Revature.controllers;

import com.Revature.models.DTOs.LoginDTO;
import com.Revature.models.DTOs.OutgoingUserDTO;
import com.Revature.services.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
public class AuthController {

    private AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO, HttpSession session){

        OutgoingUserDTO outgoingUserDTO = authService.login(loginDTO, session);

        if(outgoingUserDTO == null){

            return ResponseEntity.status(401).body("Invalid Credentials!");

        }
        return ResponseEntity.accepted().body(outgoingUserDTO);
    }
}
