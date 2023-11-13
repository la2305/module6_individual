package com.example.not.repository.Product;

import com.example.not.IProjection.product.IProductProjection;
import com.example.not.model.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductRepository extends JpaRepository<Product,Long> {
    @Query(nativeQuery = true,value = " SELECT product.product_id as productId, product.name as productName, product.price as productPrice, type.name as typeName, image.image_address as imageAddress" +
            " FROM product " +
            " JOIN `type` ON product.type_id = `type`.type_id " +
            " LEFT JOIN image ON image.product_id = product.product_id " +
            " LEFT JOIN image AS i2 ON i2.product_id = image.product_id AND i2.image_id < image.image_id " +
            " WHERE i2.image_id IS NULL and type.name like :searchType ")
    Page<IProductProjection> findAllProductBy(Pageable pageable, @Param("searchType") String searchType);
}
