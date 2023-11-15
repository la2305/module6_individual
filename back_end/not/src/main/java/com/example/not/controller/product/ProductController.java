package com.example.not.controller.product;

import com.example.not.IProjection.product.IProductProjection;
import com.example.not.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth/product")
public class ProductController {
    @Autowired
    private IProductService iProductService;
    @GetMapping("/list")
    public ResponseEntity<Page<IProductProjection>> findAllProductBy(@RequestParam(name = "page",defaultValue = "0",required = false) int page,
                                                                     @RequestParam(name = "searchType",defaultValue = "",required = false) String searchType,
                                                                     @RequestParam(name = "sort",defaultValue = "productId",required = false) String sortBy){
        Sort sort = null;
        if (sortBy.equals("productId")){
            sort = Sort.by("productId").descending();
        } else if (sortBy.equals("ASC")) {
            sort = Sort.by("productPrice").ascending();
        } else if (sortBy.equals("DESC")) {
            sort =Sort.by("productPrice").descending();
        }

        Pageable pageable = PageRequest.of(page,9, sort );
        Page<IProductProjection> productProjectionPage = iProductService.findAllProductBy(pageable,"%"+searchType+"%");
        if (productProjectionPage.getContent().isEmpty()){
            return new ResponseEntity<>(productProjectionPage,HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productProjectionPage, HttpStatus.OK);
    }
    @GetMapping("/product-detail")
    public ResponseEntity<IProductProjection> findProductByProductId(@RequestParam("productId") int productId){
        IProductProjection iProductProjection = iProductService.findProductByProductId(productId);
        return new ResponseEntity<>(iProductProjection,HttpStatus.OK);
    }
}
