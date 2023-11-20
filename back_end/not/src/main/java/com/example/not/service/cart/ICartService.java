package com.example.not.service.cart;

import com.example.not.IProjection.cart.ICartProjection;
import com.example.not.model.cart.Cart;
import com.example.not.model.user.Users;

import java.util.List;

public interface ICartService {
    List<ICartProjection>findAllCartByUserName(String userName);
    void createCart(int quantityProductOrder,int productId, String userName);
    void deleteCartByCartId(int productId,int userId);
}
