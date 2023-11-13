package com.example.not.service.user;

import com.example.not.model.user.ERole;
import com.example.not.model.user.Roles;

import java.util.Optional;

public interface IRoleService {
    Optional<Roles> findByRoleName(ERole roleName);
}
