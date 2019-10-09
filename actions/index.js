import axios from 'axios';
import Cookies from 'js-cookie';
import { getCookieFromReq } from '../helpers/utils';

<<<<<<< HEAD
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    timeour: 4000
});

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
=======
const setAuthHeader = (req) => { // Send the request as the input param, so the cookie/Token may be extracted
    const token = req ? getCookieFromReq(req , 'jwt') : Cookies.getJSON('jwt');
    // Get Cookie from req if req is available, else get it using getJSON()
>>>>>>> 80fd6bfe361fa693ca86557b71233e95794c17af

    if(token){ // Set Header
        return { headers: {'authorization': `Bearer ${token}`}};
    }
}

const rejectPromise = (resError) => {
    let error = {};

    if(resError && resError.response && resError.response.data){
        error = resError.response.data;
    }else{
        error = resError;
    }

    return Promise.reject(error);
}

export const getSecretData = async (req) => {

<<<<<<< HEAD
    return await axiosInstance.get('secret', setAuthHeader(req)).then(response => response.data); // 1-liner code doesn't require 'return' to be mentioned
    // setAuthHeader(req) => To get the auth header for verifying if the user is the Siteowner
}

export const getPortfolios = async () => {
=======
    const url ='http://localhost:4000/api/v1/secret';
>>>>>>> 80fd6bfe361fa693ca86557b71233e95794c17af

    return await axiosInstance.get('portfolios').then(response => response.data); // 1-liner code doesn't require 'return' to be mentioned
}

export const createPortfolio = async (portfolioData) => {
    
    return await axiosInstance.post('portfolios',portfolioData, setAuthHeader())
    .then(response => response.data) // 1-liner code doesn't require 'return' to be mentioned
    .catch(error => rejectPromise(error))
    // The token may not be fetched from the cookie form the server, as this is the clientside
}