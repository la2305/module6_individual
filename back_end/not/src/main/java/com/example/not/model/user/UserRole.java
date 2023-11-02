package com.example.not.model.user;

import javax.persistence.*;

@Entity
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userRoleId;
    @ManyToOne
    @JoinColumn(name = "role_id",referencedColumnName = "roleId")
    private Roles roles;
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "userId")
    private Users users;
}
