package com.example.not.model.oder;

import com.example.not.model.product.Product;

import javax.persistence.*;

@Entity
public class OderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderDetailId;
    private Double priceOrder;
    private Integer quantityOrder;
    @ManyToOne
    @JoinColumn(name = "order_bill_id",referencedColumnName = "orderBillId")
    private OrderBill orderBill;
    @ManyToOne
    @JoinColumn(name = "product_id",referencedColumnName = "productId")
    private Product product;
}
