package com.example.not.service.product;

import com.example.not.IProjection.product.IProductProjection;
import com.example.not.repository.product.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Page<IProductProjection> findAllProductBy(Pageable pageable, String searchType) {
        return iProductRepository.findAllProductBy(pageable,searchType);
    }

    @Override
    public IProductProjection findProductByProductId(int productId) {
        return iProductRepository.findProductByProductId(productId);
    }
}
