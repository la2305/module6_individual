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
    private Integer quantity;
    @ManyToOne
    @JoinColumn(name = "type_id",referencedColumnName = "typeId")
    private Type type;
}
