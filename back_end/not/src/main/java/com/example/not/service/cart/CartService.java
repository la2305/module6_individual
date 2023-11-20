package com.example.not.service.cart;
import com.example.not.IProjection.cart.ICartProjection;
import com.example.not.model.user.Users;
import com.example.not.repository.cart.ICartRepository;
import com.example.not.repository.users.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CartService implements ICartService{
    @Autowired
    private ICartRepository iCartRepository;
    @Autowired
    private IUserRepository iUserRepository;

    @Override
    public List<ICartProjection> findAllCartByUserName(String userName) {
        return iCartRepository.findAllCartByUserName(userName);
    }

    @Override
    public void createCart(int quantityProductOrder,int productId,String userName) {
        iCartRepository.createCart(quantityProductOrder,productId,iUserRepository.findByUserName(userName).getUserId());
    }

    @Override
    public void deleteCartByCartId(int productId,int userId) {
        iCartRepository.deleteCartByIdCart(productId,userId);
    }

}
