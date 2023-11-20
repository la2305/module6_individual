package com.example.not.model.user;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "Roles")
@Data
public class Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RoleId")
    private int roleId;
    @Column(name = "RoleName")
    @Enumerated(EnumType.STRING)
    private ERole roleName;

    public Roles() {
    }

    public Roles(int roleId, ERole roleName) {
        this.roleId = roleId;
        this.roleName = roleName;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public ERole getRoleName() {
        return roleName;
    }

    public void setRoleName(ERole roleName) {
        this.roleName = roleName;
    }
}
