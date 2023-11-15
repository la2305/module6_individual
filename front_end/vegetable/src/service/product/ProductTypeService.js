import axios from "axios";

export const getProductTypeList = async () =>{
    try{
        const response = await axios.get(`http://localhost:8080/api/v1/auth/type/list`);
        return response.data;
    }catch(e){
        console.log(e);
    }
}