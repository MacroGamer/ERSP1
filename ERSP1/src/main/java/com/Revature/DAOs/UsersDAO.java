package com.Revature.DAOs;

import com.Revature.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersDAO extends JpaRepository<Users, Integer> {
    public Users findUsersByUsersId(int usersId);
    public Users findUsersByUsername(String username);
}
