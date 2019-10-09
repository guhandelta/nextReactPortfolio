import axios from 'axios';
import Cookies from 'js-cookie';
import { getCookieFromReq } from '../helper/utils';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    timeour: 4000
});

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

    if(token){
        return { headers: {'authorization': `Bearer ${token}`} };
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

    return await axiosInstance.get('secret', setAuthHeader(req)).then(response => response.data); // 1-liner code doesn't require 'return' to be mentioned
    // setAuthHeader(req) => To get the auth header for verifying if the user is the Siteowner
}

export const getPortfolios = async () => {

    return await axiosInstance.get('portfolios').then(response => response.data); // 1-liner code doesn't require 'return' to be mentioned
}

export const createPortfolio = async (portfolioData) => {
    
    return await axiosInstance.post('portfolios',portfolioData, setAuthHeader())
    .then(response => response.data) // 1-liner code doesn't require 'return' to be mentioned
    .catch(error => rejectPromise(error))
    // The token may not be fetched from the cookie form the server, as this is the clientside
}