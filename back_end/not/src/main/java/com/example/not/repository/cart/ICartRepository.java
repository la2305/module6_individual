package com.example.not.repository.cart;

import com.example.not.IProjection.cart.ICartProjection;
import com.example.not.model.cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart,Long> {
    @Query(nativeQuery = true,value = " SELECT product.name as productName, product.price as productPrice,product.weight as weight, image.image_address as imageAddress, cart.cart_id as cartId, cart.quantity_product_order as quantityProductOrder, cart.product_id as productId, cart.user_id as userId, users.user_name as userName" +
            " FROM product " +
            " join cart on cart.product_id = product.product_id " +
            " join users on users.user_id = cart.user_id " +
            " LEFT JOIN image ON image.product_id = product.product_id " +
            " LEFT JOIN image AS i2 ON i2.product_id = image.product_id AND i2.image_id < image.image_id " +
            " WHERE i2.image_id IS NULL and  users.user_name = :userName " +
            " order by cart.cart_id asc ")
    List<ICartProjection>findAllCartByUserName(String userName);

    @Transactional
    @Modifying
    @Query(nativeQuery = true,value = " INSERT INTO cart (quantity_product_order, product_id, user_id) " +
            " VALUES (:newQuantity, :productId, :userId) " +
            " ON DUPLICATE KEY UPDATE quantity_product_order = quantity_product_order + :newQuantity ")
    void createCart(int newQuantity, int productId, int userId);

    @Transactional
    @Modifying
    @Query(nativeQuery = true,value = " delete from cart " +
            " where product_id = :productId and user_id = :userId ")
    void deleteCartByIdCart(int productId, int userId);

}
