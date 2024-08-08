package com.Revature.controllers;

import com.Revature.DAOs.UsersDAO;
import com.Revature.models.Roles;
import com.Revature.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
@CrossOrigin
public class RolesController {

    private RolesService rolesService;
    private UsersDAO usersDAO;

    @Autowired
    public RolesController(RolesService rolesService, UsersDAO usersDAO) {
        this.rolesService = rolesService;
        this.usersDAO = usersDAO;
    }

    @PostMapping
    public ResponseEntity<Roles> newRoles(@RequestBody Roles newRoles){
        Roles roles = rolesService.newRoles(newRoles);
        return ResponseEntity.status(201).body(roles);
    }

    @GetMapping
    public ResponseEntity<List<Roles>> getAllRoles(){
        List<Roles> roles= rolesService.getAllRoles();
        return ResponseEntity.ok(roles);
    }
}
