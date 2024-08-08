package com.Revature.DAOs;

import com.Revature.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthDAO extends JpaRepository<Users, Integer> {
    public Users findByUsernameAndPassword(String username, String password);
}
