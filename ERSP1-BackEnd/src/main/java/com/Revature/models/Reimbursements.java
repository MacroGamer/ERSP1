package com.Revature.models;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;

@Entity
@Table(name="reimbursements")
@Component
public class Reimbursements {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int reimbursementsId;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private double amount;

    @Column
    private String status;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "usersId")
    private Users users;

    public Reimbursements() {
    }

    public Reimbursements(int reimbursementsId, String description, double amount, String status, Users users) {
        this.reimbursementsId = reimbursementsId;
        this.description = description;
        this.amount = amount;
        this.status = status;
        this.users = users;
    }

    public int getReimbursementsId() {
        return reimbursementsId;
    }

    public void setReimbursementsId(int reimbursementsId) {
        this.reimbursementsId = reimbursementsId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return "Reimbursements{" +
                "reimbursementsId=" + reimbursementsId +
                ", description='" + description + '\'' +
                ", amount=" + amount +
                ", status='" + status + '\'' +
                ", users=" + users +
                '}';
    }
}
