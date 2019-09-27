


export const getCookieFromReq = (req, cookieKey) => {
    const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookieKey}=`));
            
    if(!cookie) {return undefined}; // Return undefined if the expiresAtCookie is not available
    
    return cookie.split('=')[1];// split() => returns array of expiresAt text, where 2nd value'[1]' is date
}