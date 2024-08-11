package com.Revature.services;

import com.Revature.DAOs.ReimbursementsDAO;
import com.Revature.models.Reimbursements;
import com.Revature.models.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReimbursementsService {


    private ReimbursementsDAO reimbursementsDAO;

    @Autowired
    public ReimbursementsService(ReimbursementsDAO reimbursementsDAO){this.reimbursementsDAO = reimbursementsDAO;}

    public Reimbursements newReimbursements(Reimbursements newReimbursements, Users users){
        newReimbursements.setUsers(users);
        newReimbursements.setStatus("PENDING");
        Reimbursements reimbursements = reimbursementsDAO.save(newReimbursements);
        return reimbursements;
    }

    public List<Reimbursements> getAllReimbursements(){
        return reimbursementsDAO.findAll();
    }
    public List<Reimbursements> getPendingReimbursements(){return reimbursementsDAO.findByStatus("PENDING");}
    public List<Reimbursements> getUsersPendingReimbursements(int id){return reimbursementsDAO.findByStatusAndUsersUsersId("PENDING", id);}
    public Reimbursements getReimbursementsById(int id){return reimbursementsDAO.findById(id);}
    public Reimbursements resolveReimbursements(String status, int id){
        Reimbursements rawReimbursements = getReimbursementsById(id);
        rawReimbursements.setStatus(status);
        Reimbursements updatedReimbursements = reimbursementsDAO.save(rawReimbursements);
        return updatedReimbursements;
    }
    public List<Reimbursements> getReimbursementsByUsersId (int id){
        return reimbursementsDAO.findByUsersUsersId(id);
    }
}
