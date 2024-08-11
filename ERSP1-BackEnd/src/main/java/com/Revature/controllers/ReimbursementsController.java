package com.Revature.controllers;


import com.Revature.DAOs.UsersDAO;
import com.Revature.models.Reimbursements;
import com.Revature.models.Users;
import com.Revature.services.ReimbursementsService;
import com.Revature.services.UsersService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

    @PostMapping("/new/u/{id}")
    public ResponseEntity<Reimbursements> newReimbursements (@RequestBody Reimbursements newReimbursements, @PathVariable int id){
        Users users = usersDAO.findUsersByUsersId(id);
        Reimbursements reimbursements = reimbursementsService.newReimbursements(newReimbursements, users);


        return ResponseEntity.status(201).body(reimbursements);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Reimbursements>> getAllReimbursements(){
        return ResponseEntity.ok(reimbursementsService.getAllReimbursements());
    }

    @GetMapping("/PENDING")
    public ResponseEntity<List<Reimbursements>> getPendingReimbursements(){
        return ResponseEntity.ok((reimbursementsService.getPendingReimbursements()));
    }
    @GetMapping("/PENDING/u/{id}")
    public ResponseEntity<List<Reimbursements>> getUsersPendingReimbursements(@PathVariable int id){
        return ResponseEntity.ok((reimbursementsService.getUsersPendingReimbursements(id)));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Reimbursements> getReimbursementsById(@PathVariable int id){
        return ResponseEntity.ok((reimbursementsService.getReimbursementsById(id)));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Reimbursements> resolveReimbursements(@RequestBody String status, @PathVariable int id){
        return ResponseEntity.status(201).body(reimbursementsService.resolveReimbursements(status, id));
    }
    @GetMapping("/u/{id}")
    public ResponseEntity<List<Reimbursements>> getReimbursementsByUsersId(@PathVariable int id){
        List<Reimbursements> allReimbursements = reimbursementsService.getReimbursementsByUsersId(id);
        if(allReimbursements == null){
            List<Reimbursements> emptyList = new ArrayList<Reimbursements>() ;
            return ResponseEntity.ok(emptyList);
        }
        return ResponseEntity.ok(allReimbursements);
    }
}
