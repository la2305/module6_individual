package com.example.not.service.order;

import com.example.not.IProjection.orderBill.OrderBillDto;
import com.example.not.model.oder.OrderBill;

import java.util.List;

public interface IOrderBillService {
    void createOrderBill(OrderBillDto orderBillDto, String userName);
    List<OrderBill> getOrderBillByUserId(String userName);
}
