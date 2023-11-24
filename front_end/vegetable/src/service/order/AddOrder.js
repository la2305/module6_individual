import axios from "axios";

export const addOrder = async (listCart,userName) => {
    try{
        console.log(listCart);
        console.log(userName);
        await axios.post(`http://localhost:8080/api/v1/auth/orderBill/create?userName=${userName}`,listCart);
    }catch(e){
        console.log(e);
    }
}

export const getOrderBillListByUserId = async (userName) =>{
    try{
        const response = await axios.get(`http://localhost:8080/api/v1/auth/orderBill/detail?userName=${userName}`);
        return response.data;
    }catch(e){
        console.log(e);
    }
}