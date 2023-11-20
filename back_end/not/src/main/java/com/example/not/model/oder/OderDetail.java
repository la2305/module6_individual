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

    public OderDetail() {
    }

    public OderDetail(Long orderDetailId, Double priceOrder, Integer quantityOrder, OrderBill orderBill, Product product) {
        this.orderDetailId = orderDetailId;
        this.priceOrder = priceOrder;
        this.quantityOrder = quantityOrder;
        this.orderBill = orderBill;
        this.product = product;
    }

    public Long getOrderDetailId() {
        return orderDetailId;
    }

    public void setOrderDetailId(Long orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public Double getPriceOrder() {
        return priceOrder;
    }

    public void setPriceOrder(Double priceOrder) {
        this.priceOrder = priceOrder;
    }

    public Integer getQuantityOrder() {
        return quantityOrder;
    }

    public void setQuantityOrder(Integer quantityOrder) {
        this.quantityOrder = quantityOrder;
    }

    public OrderBill getOrderBill() {
        return orderBill;
    }

    public void setOrderBill(OrderBill orderBill) {
        this.orderBill = orderBill;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
