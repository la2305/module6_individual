//package com.example.not.model.product;
//
//import javax.persistence.*;
//
//@Entity
//public class Image {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long imageId;
//    @Column(columnDefinition = "LONGTEXT")
//    private String imageAddress;
//    @ManyToOne
//    @JoinColumn(name = "product_id",referencedColumnName = "productId")
//    private Product product;
//}
