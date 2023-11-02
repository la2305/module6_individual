package com.example.not.model.oder;

import com.example.not.model.user.Users;

import javax.persistence.*;

@Entity
public class OrderBill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderBillId;
    @Column(columnDefinition = "DATE")
    private String dateOfOder;
    private Boolean paymentStatus;
//    @DateTimeFormat(pattern = "dd-MM-yyyy")
//    private LocalDate timeOfOrder;
    @Column(columnDefinition = "TIME")
    private String timeOfOrder;
    private Double totalMoney;
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "userId")
    private Users users;
}
