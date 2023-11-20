package com.example.not.model.product;

import javax.persistence.*;

@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;
    @Column(columnDefinition = "LONGTEXT")
    private String imageAddress;
    @ManyToOne
    @JoinColumn(name = "product_id",referencedColumnName = "productId")
    private Product product;

    public Image() {
    }

    public Image(Long imageId, String imageAddress, Product product) {
        this.imageId = imageId;
        this.imageAddress = imageAddress;
        this.product = product;
    }

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public String getImageAddress() {
        return imageAddress;
    }

    public void setImageAddress(String imageAddress) {
        this.imageAddress = imageAddress;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
