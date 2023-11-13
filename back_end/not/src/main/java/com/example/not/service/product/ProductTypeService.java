package com.example.not.service.product;
import com.example.not.model.product.Type;
import com.example.not.repository.Product.IProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService{
    @Autowired
    private IProductTypeRepository iProductTypeRepository;
    @Override
    public List<Type> findAllType() {
        return iProductTypeRepository.findAllType();
    }
}
