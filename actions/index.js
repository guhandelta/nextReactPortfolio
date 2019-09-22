import axios from 'axios';
import Cookies from 'js-cookie';
import { getCookieFromReq } from '../helper/utils';

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

    if(token){
        return { headers: {'authorization': `Bearer ${token}`} };
    }
}

export const getSecretData = async (req) => {

    const url ='http://localhost:4000/api/v1/secret/';

    return await axios.get(url, setAuthHeader(req)).then(response => response.data); // 1-liner code doesn't require 'return' to be mentioned
}
