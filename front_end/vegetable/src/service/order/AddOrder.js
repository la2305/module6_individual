import axios from "axios";

export const addOrder = async (listCart,userName) => {
    try{
        await axios.post(`http://localhost:8080/api/v1/auth/orderBill/create?userName=${userName}`,listCart);
    }catch(e){
        console.log(e);
    }
}  