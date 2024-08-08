package com.Revature.DAOs;

import com.Revature.models.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolesDAO extends JpaRepository<Roles, Integer> {
    public Roles findByRolesId(int rolesId);
}
