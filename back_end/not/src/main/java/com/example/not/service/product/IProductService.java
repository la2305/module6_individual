package com.example.not.service.product;

import com.example.not.IProjection.product.IProductProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<IProductProjection> findAllProductBy(Pageable pageable, String searchType);
}
