package com.Revature.models;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Entity
@Table(name="roles")
@Component
public class Roles {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int rolesId;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private double baseSalary;

    @Column(nullable = false)
    private int basePTO;

    @OneToMany(mappedBy = "roles", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Users> usersList;

    public Roles() {
    }

    public Roles(int rolesId, String name, double baseSalary, int basePTO) {
        this.rolesId = rolesId;
        this.name = name;
        this.baseSalary = baseSalary;
        this.basePTO = basePTO;
    }

    //Boilerplate
    public int getRolesId() {
        return rolesId;
    }

    public void setRolesId(int rolesId) {
        this.rolesId = rolesId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBaseSalary() {
        return baseSalary;
    }

    public void setBaseSalary(double baseSalary) {
        this.baseSalary = baseSalary;
    }

    public int getBasePTO() {
        return basePTO;
    }

    public void setBasePTO(int basePTO) {
        this.basePTO = basePTO;
    }

    @Override
    public String toString() {
        return "Roles{" +
                "rolesId=" + rolesId +
                ", name='" + name + '\'' +
                ", baseSalary=" + baseSalary +
                ", basePTO=" + basePTO +
                '}';
    }
}
