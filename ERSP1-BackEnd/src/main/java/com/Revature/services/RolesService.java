package com.Revature.services;

import com.Revature.DAOs.RolesDAO;
import com.Revature.models.Roles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolesService {

    private RolesDAO rolesDAO;

    @Autowired
    public RolesService(RolesDAO rolesDAO){this.rolesDAO = rolesDAO;}

    public Roles getRolesByRolesId(int rolesId){
        return rolesDAO.findByRolesId(rolesId);
    }

    public Roles newRoles(Roles newRoles){
        Roles roles = rolesDAO.save(newRoles);
        return roles;
    }
    public List<Roles> getAllRoles(){
        return rolesDAO.findAll();
    }

}
