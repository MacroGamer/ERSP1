package com.Revature.services;

import com.Revature.DAOs.AuthDAO;
import com.Revature.controllers.AuthController;
import com.Revature.models.DTOs.LoginDTO;
import com.Revature.models.DTOs.OutgoingUserDTO;
import com.Revature.models.Users;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private AuthDAO authDAO;

    @Autowired
    public AuthService(AuthDAO authDAO) {
        this.authDAO = authDAO;
    }

    public OutgoingUserDTO login(LoginDTO loginDTO, HttpSession session){
        Users user = authDAO.findByUsernameAndPassword(loginDTO.getUsername(), loginDTO.getPassword());

        if (user == null){
            return null;
        } else{
            OutgoingUserDTO outgoingUserDTO = new OutgoingUserDTO(user.getUsersId(), user.getUsername(), user.getRoles().getRolesId());

            session.setAttribute("usersId", user.getUsersId());
            session.setAttribute("username", user.getUsername());
            session.setAttribute("rolesId", user.getRoles().getRolesId());


            return outgoingUserDTO;
        }
    }

}
