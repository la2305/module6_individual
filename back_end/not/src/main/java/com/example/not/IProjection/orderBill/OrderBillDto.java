package com.example.not.IProjection.orderBill;

import com.example.not.IProjection.cart.CartDto;

import javax.validation.constraints.NotNull;
import java.util.List;
@NotNull
public class OrderBillDto {
    private Long orderBillId;
    private String address;
    private String note;
    private Double totalMoney;
    private List<CartDto> cartDtoList;

    public OrderBillDto() {
    }

    public OrderBillDto(Long orderBillId, String address, String note, Double totalMoney, List<CartDto> cartDtoList) {
        this.orderBillId = orderBillId;
        this.address = address;
        this.note = note;
        this.totalMoney = totalMoney;
        this.cartDtoList = cartDtoList;
    }

    public Long getOrderBillId() {
        return orderBillId;
    }

    public void setOrderBillId(Long orderBillId) {
        this.orderBillId = orderBillId;
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

    public Double getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Double totalMoney) {
        this.totalMoney = totalMoney;
    }

    public List<CartDto> getCartDtoList() {
        return cartDtoList;
    }

    public void setCartDtoList(List<CartDto> cartDtoList) {
        this.cartDtoList = cartDtoList;
    }
}
