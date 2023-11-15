import axios from "axios";
export const getAllCartByUserName = async (userName) =>{
    try{
        const response = await axios.get(`http://localhost:8080/api/v1/auth/cart?userName=${userName}`);
        return response.data;
    }catch(e){
        console.log(e);
    }
}
export const deleteCartByCartId = async (productId,userId) =>{
    try{
        await axios.delete(`http://localhost:8080/api/v1/auth/delete?productId=${productId}&userId=${userId}`);
    }catch(e){
        console.log(e);
    }
}
export const createCart = async (quantityProductOrder,productId,userName) =>{
    try{
        await axios.post(`http://localhost:8080/api/v1/auth/create?quantityProductOrder=${quantityProductOrder}&productId=${productId}&userName=${userName}`);
    }catch(e){
        console.log(e);
    }
}
