package com.example.not.model.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Users")
@Data
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserId")
    private int userId;
    @Column(name = "UserName",nullable = false,unique = true)
    private String userName;
    @Column(name = "Password",nullable = false)
    private String passWord;
    @Column(name = "Created")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date created;
    @Column(name = "Email",nullable = false,unique = true)
    private String email;
    @Column(name = "Phone")
    private String phone;
    @Column(name ="UserStatus")
    private boolean userStatus;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "User_Role",joinColumns = @JoinColumn(name = "UserId"),
                inverseJoinColumns = @JoinColumn(name = "RoleId"))
    private Set<Roles> listRoles = new HashSet<>();

    public Users() {
    }

    public Users(int userId, String userName, String passWord, Date created, String email, String phone, boolean userStatus, Set<Roles> listRoles) {
        this.userId = userId;
        this.userName = userName;
        this.passWord = passWord;
        this.created = created;
        this.email = email;
        this.phone = phone;
        this.userStatus = userStatus;
        this.listRoles = listRoles;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isUserStatus() {
        return userStatus;
    }

    public void setUserStatus(boolean userStatus) {
        this.userStatus = userStatus;
    }

    public Set<Roles> getListRoles() {
        return listRoles;
    }

    public void setListRoles(Set<Roles> listRoles) {
        this.listRoles = listRoles;
    }
}
