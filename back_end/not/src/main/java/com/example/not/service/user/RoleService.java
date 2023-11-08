package com.example.not.service.user;

import com.example.not.model.entity.ERole;
import com.example.not.model.entity.Roles;
import com.example.not.repository.Users.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService implements IRoleService{
    @Autowired
    private RoleRepository roleRepository;
    @Override
    public Optional<Roles> findByRoleName(ERole roleName) {
        return roleRepository.findByRoleName(roleName);
    }
}
