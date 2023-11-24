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
    @Column(columnDefinition = "TIME")
    private String timeOfOrder;
    private Double totalMoney;
    private String address;
    private String note;

    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "userId")
    private Users users;

    public OrderBill() {
    }

    public OrderBill(Long orderBillId, String dateOfOder, Boolean paymentStatus, String timeOfOrder, Double totalMoney, String address, String note, Users users) {
        this.orderBillId = orderBillId;
        this.dateOfOder = dateOfOder;
        this.paymentStatus = paymentStatus;
        this.timeOfOrder = timeOfOrder;
        this.totalMoney = totalMoney;
        this.address = address;
        this.note = note;
        this.users = users;
    }

    public Long getOrderBillId() {
        return orderBillId;
    }

    public void setOrderBillId(Long orderBillId) {
        this.orderBillId = orderBillId;
    }

    public String getDateOfOder() {
        return dateOfOder;
    }

    public void setDateOfOder(String dateOfOder) {
        this.dateOfOder = dateOfOder;
    }

    public Boolean getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(Boolean paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getTimeOfOrder() {
        return timeOfOrder;
    }

    public void setTimeOfOrder(String timeOfOrder) {
        this.timeOfOrder = timeOfOrder;
    }

    public Double getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Double totalMoney) {
        this.totalMoney = totalMoney;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
