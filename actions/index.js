import axios from 'axios';
import Cookies from 'js-cookie';
import { getCookieFromReq } from '../helpers/utils';

const setAuthHeader = (req) => { // Send the request as the input param, so the cookie/Token may be extracted
    const token = req ? getCookieFromReq(req , 'jwt') : Cookies.getJSON('jwt');
    // Get Cookie from req if req is available, else get it using getJSON()

    if(token){ // Set Header
        return { headers: {'authorization': `Bearer ${token}`}};
    }
}

export const getSecretData = async (req) => {

    const url ='http://localhost:4000/api/v1/secret';

    return await axios.get(url, setAuthHeader(req)).then(response => response.data); // 1-liner code doesn't require 'return' to be mentioned
}
