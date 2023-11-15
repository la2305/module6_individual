package com.example.not.model.cart;
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

    public Cart() {
    }

    public Cart(Long cartId, Integer quantityProductOrder, Users users, Product product) {
        this.cartId = cartId;
        this.quantityProductOrder = quantityProductOrder;
        this.users = users;
        this.product = product;
    }

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public Integer getQuantityProductOrder() {
        return quantityProductOrder;
    }

    public void setQuantityProductOrder(Integer quantityProductOrder) {
        this.quantityProductOrder = quantityProductOrder;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
