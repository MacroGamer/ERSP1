package com.Revature.controllers;

import com.Revature.models.Roles;
import com.Revature.models.Users;
import com.Revature.services.RolesService;
import com.Revature.services.UsersService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
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
        return ResponseEntity.ok(users);
    }

    @GetMapping("/roleId")
    public ResponseEntity getRoleIdByUsername(@RequestBody String username){
        int roleId = usersService.getRoleIdByUsername(username);
        return ResponseEntity.ok(roleId);
    }
    @GetMapping("/u/{id}")
    public ResponseEntity getUserbyUsersId(@PathVariable int id){
        return ResponseEntity.ok(usersService.getUsersByUsersId(id));
    }
    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity deleteUsers(@PathVariable int id){
        System.out.println("Delete Controller Called");
        System.out.println(id);
        Users users = usersService.getUsersByUsersId(id);
        if (users == null){
            return ResponseEntity.status(400).body("User not found");
        }
        try {
            //usersService.updateUsersRoles(null, users);
        }
        finally {
            usersService.deleteUsersById(id);
        }


        System.out.println(usersService.getUsersByUsersId(id));
        return ResponseEntity.ok("Success");
    }
    @PatchMapping("/u/{id}")
    public ResponseEntity promoteUsers(@PathVariable int id){
            Users updatedUser = usersService.promoteUsers(id);
        return ResponseEntity.ok(updatedUser);
    }
}
