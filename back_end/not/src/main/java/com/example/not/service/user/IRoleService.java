package com.example.not.service.user;

import com.example.not.model.entity.ERole;
import com.example.not.model.entity.Roles;

import java.util.Optional;

public interface IRoleService {
    Optional<Roles> findByRoleName(ERole roleName);
}
