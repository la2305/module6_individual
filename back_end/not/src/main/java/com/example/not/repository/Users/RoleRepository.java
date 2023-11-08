package com.example.not.repository.Users;

import com.example.not.model.entity.ERole;
import com.example.not.model.entity.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Roles,Integer> {
    Optional<Roles> findByRoleName(ERole roleName);
}
