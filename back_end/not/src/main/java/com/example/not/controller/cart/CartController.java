package com.example.not.controller.cart;
import com.example.not.IProjection.cart.ICartProjection;
import com.example.not.model.cart.Cart;
import com.example.not.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class CartController {
    @Autowired
    private ICartService iCartService;
    @GetMapping("/cart")
    public ResponseEntity<?> findAllCartByUserName(@RequestParam(name = "userName") String userName){
        List<ICartProjection> cartProjectionList = iCartService.findAllCartByUserName(userName);
        return new ResponseEntity<>(cartProjectionList,HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> createCart(@RequestParam("quantityProductOrder") int quantityProductOrder,
                                        @RequestParam("productId") int productId,
                                        @RequestParam("userName") String userName){
        iCartService.createCart(quantityProductOrder,productId,userName);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteCartByCartId(@RequestParam(name = "productId") int productId,
                                                @RequestParam(name = "userId")int userId){
        iCartService.deleteCartByCartId(productId,userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
