package com.Revature.controllers;

import com.Revature.models.Roles;
import com.Revature.models.Users;
import com.Revature.services.RolesService;
import com.Revature.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UsersController {


    private UsersService usersService;

    @Autowired
    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @PostMapping
    public ResponseEntity<Users> newUsers(@RequestBody Users newUsers){
        Users users = usersService.newUsers(newUsers);

        return ResponseEntity.status(201).body(users);
    }

    @GetMapping
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = usersService.getAllUsers();
        System.out.println(users);
        return ResponseEntity.ok(users);
    }

    @GetMapping("/roleId")
    public ResponseEntity getRoleIdByUsername(@RequestBody String username){
        int roleId = usersService.getRoleIdByUsername(username);
        return ResponseEntity.ok(roleId);
    }
}
