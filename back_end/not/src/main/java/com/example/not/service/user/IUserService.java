package com.example.not.service.user;

import com.example.not.model.user.Users;

public interface IUserService {
    Users findByUserName(String userName);
    boolean existsByUserName(String userName);
    boolean existsByEmail(String email);
    Users saveOrUpdate(Users user);

}
