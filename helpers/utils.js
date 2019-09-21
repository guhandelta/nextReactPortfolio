


export const getCookieFromReq = ( req, cookieKey ) => {
    const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookieKey} = `));
    //Get cookie from header -> split it with ; -> look for the string starting with "cookie"

    if(!cookie) {return undefined};
    // return undefined if there is no cookie

    return cookie.split('=')[1];// split() => returns array of expiresAt text, where 2nd value'[1]' is data
    // else return the value of the cookie
}