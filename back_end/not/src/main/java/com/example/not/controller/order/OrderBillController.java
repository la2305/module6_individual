package com.example.not.controller.order;


import com.example.not.IProjection.orderBill.OrderBillDto;
import com.example.not.model.oder.OrderBill;
import com.example.not.service.order.IOrderBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth/orderBill")
public class OrderBillController {
    @Autowired
    private IOrderBillService iOrderBillService;
    @PostMapping("/create")
    public ResponseEntity<?> createOrderBill(@RequestBody OrderBillDto orderBillDto,
                                             @RequestParam(name = "userName") String userName){
        iOrderBillService.createOrderBill(orderBillDto,userName);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/detail")
    public ResponseEntity<?> getOrderBillByUserId(@RequestParam(name = "userName") String userName){
        List<OrderBill> orderBillList = iOrderBillService.getOrderBillByUserId(userName);
        return new ResponseEntity<>(orderBillList,HttpStatus.OK);
    }
}
