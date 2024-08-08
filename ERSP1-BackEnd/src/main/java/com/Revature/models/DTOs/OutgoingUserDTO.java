package com.Revature.models.DTOs;


import com.Revature.models.Reimbursements;
import com.Revature.models.Roles;
import jakarta.persistence.*;

import java.util.List;

public class OutgoingUserDTO {

    private int usersId;

    private String username;

    private int rolesId;

    public OutgoingUserDTO() {
    }

    public OutgoingUserDTO(int usersId, String username, int rolesId) {
        this.usersId = usersId;
        this.username = username;
        this.rolesId = rolesId;
    }

    public int getUsersId() {
        return usersId;
    }

    public void setUsersId(int usersId) {
        this.usersId = usersId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getRolesId() {
        return rolesId;
    }

    public void setRolesId(int rolesId) {
        this.rolesId = rolesId;
    }

    @Override
    public String toString() {
        return "OutgoingUserDTO{" +
                "usersId=" + usersId +
                ", username='" + username + '\'' +
                ", rolesId=" + rolesId +
                '}';
    }
}
