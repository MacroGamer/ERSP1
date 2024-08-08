package com.Revature.services;

import com.Revature.DAOs.UsersDAO;
import com.Revature.models.Roles;
import com.Revature.models.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersService {

    private RolesService rolesService;
    private UsersDAO usersDAO;

    @Autowired
    public UsersService(UsersDAO usersDAO, RolesService rolesService){this.usersDAO = usersDAO; this.rolesService = rolesService;}

    public Users newUsers(Users newUsers){
        newUsers.setRoles(rolesService.getRolesByRolesId(1));
        Users users = usersDAO.save(newUsers);
        return users;
    }

    public List<Users> getAllUsers(){
        return usersDAO.findAll();
    }
    public Users getUsersByUsersId(int usersId){ return usersDAO.findUsersByUsersId(usersId); }

    public int getRoleIdByUsername(String username){
        System.out.println(username);
        Users users = usersDAO.findUsersByUsername(username);
        System.out.println(users);
        return users.getRoles().getRolesId();
    }
}
