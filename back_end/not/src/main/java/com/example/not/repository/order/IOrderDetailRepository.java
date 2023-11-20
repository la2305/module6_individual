package com.example.not.repository.order;

import com.example.not.model.oder.OderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IOrderDetailRepository extends JpaRepository<OderDetail,Integer> {
    @Transactional
    @Modifying
    @Query(nativeQuery = true,value = " insert into oder_detail(price_order,quantity_order,order_bill_id,product_id)\n" +
            "VALUES (:priceOrder, :quantityOrder, :orderBillId, :productId) ")
    void createOrderDetail(Double priceOrder, int quantityOrder, int orderBillId, int productId);
}
