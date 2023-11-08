import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const registerAccount = async (newAccount) =>{
    try{
        await axios.post(`http://localhost:8080/api/v1/auth/signup`,newAccount);
    }catch (e){
        console.log(e);
    }
}
export const loginAccount = async (account) =>{
    try{
        const response = await axios.post(`http://localhost:8080/api/v1/auth/signin`,account);
        return response;
    }catch(e){
        console.log(e);
    }

}

export const getUserByJwtToken = () => {
    const jwtToken = localStorage.getItem("JWT");

    if (jwtToken != null) {
        const decodedToken = jwtDecode(jwtToken);
        return decodedToken;
    } else {
        return null;
    }
};