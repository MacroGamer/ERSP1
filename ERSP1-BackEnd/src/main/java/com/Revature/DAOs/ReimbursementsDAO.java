package com.Revature.DAOs;

import com.Revature.models.Reimbursements;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReimbursementsDAO extends JpaRepository<Reimbursements, Integer> {
    public List<Reimbursements> findByStatus(String status);
    public Reimbursements findById(int id);
}
