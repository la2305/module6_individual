package com.example.not.repository.users;
import com.example.not.model.user.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<Users,Integer> {
    Users findByUserName(String userName);
    boolean existsByUserName(String userName);
    boolean existsByEmail(String email);

}
