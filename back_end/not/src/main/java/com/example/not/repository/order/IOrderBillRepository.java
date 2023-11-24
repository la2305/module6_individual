package com.example.not.repository.order;
import com.example.not.model.oder.OrderBill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;
import java.util.List;


@Repository
public interface IOrderBillRepository extends JpaRepository<OrderBill,Integer> {
    @Transactional
    @Modifying
    @Query(nativeQuery = true,value = " insert into order_bill(address,date_of_oder,note,payment_status,time_of_order,total_money, user_id) " +
            " VALUES (:address, :dateOfOrder, :note, false, :timeOfOrder, :totalMoney, :userId) ")
    void createOrderBill(String address, String dateOfOrder, String note, String timeOfOrder, Double totalMoney, int userId);

    @Query(nativeQuery = true,value = " SELECT MAX(order_bill_id) FROM order_bill ")
    Integer getOrderBillMaxId();

    @Query(nativeQuery = true,value = " select order_bill.order_bill_id, order_bill.address, order_bill.date_of_oder,order_bill.note ,order_bill.payment_status , order_bill.time_of_order , order_bill.total_money, order_bill.user_id " +
            " from order_bill " +
            " where order_bill.user_id = :userId " +
            " order by order_bill.order_bill_id desc " +
            " limit 10 ")
    List<OrderBill> getOrderBillByUserId(int userId);
}
