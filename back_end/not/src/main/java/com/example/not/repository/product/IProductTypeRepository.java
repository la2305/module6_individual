package com.example.not.repository.product;
import com.example.not.model.product.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface IProductTypeRepository extends JpaRepository<Type,Long> {
    @Query(nativeQuery = true,value = " select type.type_id, type.name " +
            " from type ")
    List<Type> findAllType();
}
