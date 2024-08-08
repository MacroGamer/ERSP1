package com.Revature.controllers;


import com.Revature.DAOs.UsersDAO;
import com.Revature.models.Reimbursements;
import com.Revature.services.ReimbursementsService;
import com.Revature.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reimbursements")
@CrossOrigin
public class ReimbursementsController {

    private ReimbursementsService reimbursementsService;
    private UsersService usersService;
    private UsersDAO usersDAO;

    @Autowired
    public ReimbursementsController(ReimbursementsService reimbursementsService, UsersDAO usersDAO) {
        this.reimbursementsService = reimbursementsService;
        this.usersDAO = usersDAO;
    }

    @PostMapping
    public ResponseEntity<Reimbursements> newReimbursements (@RequestBody Reimbursements newReimbursements){
        Reimbursements reimbursements = reimbursementsService.newReimbursements(newReimbursements);


        return ResponseEntity.status(201).body(reimbursements);
    }

    @GetMapping
    public ResponseEntity<List<Reimbursements>> getAllReimbursements(){
        return ResponseEntity.ok(reimbursementsService.getAllReimbursements());
    }

    @GetMapping("/PENDING")
    public ResponseEntity<List<Reimbursements>> getPendingReimbursements(){
        return ResponseEntity.ok((reimbursementsService.getPendingReimbursements()));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Reimbursements> getReimbursementsById(@PathVariable int id){
        return ResponseEntity.ok((reimbursementsService.getReimbursementsById(id)));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Reimbursements> resolveReimbursements(@RequestBody String status, @PathVariable int id){
        return ResponseEntity.status(201).body(reimbursementsService.resolveReimbursements(status, id));
    }
}
