package com.example.not.service.order;

import com.example.not.IProjection.cart.CartDto;
import com.example.not.IProjection.orderBill.OrderBillDto;
import com.example.not.model.oder.OrderBill;
import com.example.not.repository.cart.ICartRepository;
import com.example.not.repository.order.IOrderBillRepository;
import com.example.not.repository.order.IOrderDetailRepository;
import com.example.not.repository.users.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;


@Service
public class OrderBillService implements IOrderBillService {
    @Autowired
    private IOrderBillRepository iOrderBillRepository;
    @Autowired
    private IUserRepository iUserRepository;
    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;
    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public void createOrderBill(OrderBillDto orderBillDto, String userName) {
        LocalDate today = LocalDate.now();
        String stringToday = today.toString();
        LocalTime time = LocalTime.now();
        String stringTime = time.toString();
        int userId = iUserRepository.findByUserName(userName).getUserId();
        iOrderBillRepository.createOrderBill(orderBillDto.getAddress(),stringToday,orderBillDto.getNote(),stringTime,orderBillDto.getTotalMoney(),userId);
        int idOrderBill = iOrderBillRepository.getOrderBillMaxId();
        for (CartDto o:orderBillDto.getCartDtoList()) {
            iOrderDetailRepository.createOrderDetail(o.getProductPrice(),o.getQuantityProductOrder(),idOrderBill,o.getProductId());
            iCartRepository.deleteCartByIdCart(o.getProductId(),userId);
        }
    }

    @Override
    public List<OrderBill> getOrderBillByUserId(String userName) {
        return iOrderBillRepository.getOrderBillByUserId(iUserRepository.findByUserName(userName).getUserId());
    }
}
