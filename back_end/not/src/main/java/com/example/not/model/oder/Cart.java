package com.example.not.model.oder;
import com.example.not.model.product.Product;
import com.example.not.model.user.Users;

import javax.persistence.*;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;
    private Integer quantityProductOrder;
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "userId")
    private Users users;
    @ManyToOne
    @JoinColumn(name = "product_id",referencedColumnName = "productId")
    private Product product;
}
