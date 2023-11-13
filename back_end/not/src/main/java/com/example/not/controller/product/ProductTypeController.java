package com.example.not.controller.product;

import com.example.not.model.product.Type;
import com.example.not.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth/type")
public class ProductTypeController {
    @Autowired
    private IProductTypeService iProductTypeService;
    @GetMapping("/list")
    public ResponseEntity<List<Type>> findAllProductType(){
        List<Type> typeList = iProductTypeService.findAllType();
        if (typeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList,HttpStatus.OK);
    }
}
