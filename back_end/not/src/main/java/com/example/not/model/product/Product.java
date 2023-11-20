package com.example.not.model.product;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    @Column(columnDefinition = "LONGTEXT")
    private String description;
    private String name;
    private Double price;
    @ManyToOne
    @JoinColumn(name = "type_id",referencedColumnName = "typeId")
    private Type type;

    public Product() {
    }

    public Product(Long productId, String description, String name, Double price, Type type) {
        this.productId = productId;
        this.description = description;
        this.name = name;
        this.price = price;
        this.type = type;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}
