package com.example.not.IProjection.cart;

public class CartDto {
    private int cartId;
    private String imageAddress;
    private int productId;
    private String productName;
    private Double productPrice;
    private int quantityProductOrder;
    private int userId;
    private String userName;

    public CartDto() {
    }

    public CartDto(int cartId, String imageAddress, int productId, String productName, Double productPrice, int quantityProductOrder, int userId, String userName) {
        this.cartId = cartId;
        this.imageAddress = imageAddress;
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantityProductOrder = quantityProductOrder;
        this.userId = userId;
        this.userName = userName;
    }

    public int getCardId() {
        return cartId;
    }

    public void setCardId(int cardId) {
        this.cartId = cardId;
    }

    public String getImageAddress() {
        return imageAddress;
    }

    public void setImageAddress(String imageAddress) {
        this.imageAddress = imageAddress;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }

    public int getQuantityProductOrder() {
        return quantityProductOrder;
    }

    public void setQuantityProductOrder(int quantityProductOrder) {
        this.quantityProductOrder = quantityProductOrder;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
