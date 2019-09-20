import axios from 'axios';
import Cookies from 'js-cookie';

const setAuthHeader = () => {
    const token = Cookies.getJSON('jwt');

    if(token){
        return { headers: {'authorization': `Bearer ${token}`} };
    }
}

export const getSecretData = async () => {
    return await axios.get('/api/v1/secret/', setAuthHeader()).then(response => response.data); // 1-liner code doesn't require 'return' to be mentioned
}