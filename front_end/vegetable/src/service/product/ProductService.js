import axios from "axios";

export const getProductList = async (page,searchType,sort) =>{
    try{
        const response = await axios.get(`http://localhost:8080/api/v1/auth/product/list?page=${page}&searchType=${searchType}&sort=${sort}`);
        return response.data;
    } catch(e){
        console.log(e);
    }
}