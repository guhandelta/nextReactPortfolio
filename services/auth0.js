import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

class Auth0{
    constructor(){
        this.auth0 = new auth0.WebAuth({
            domain: 'guhaprasaanth.auth0.com',
            clientID: 'pcZ8trYSuvn2qMqE720lSdIPaBQPSHLE', // ClienID from Auth0
            redirectUri : 'http://localhost:4000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.logout = this.logout.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    handleAuthentication(){
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => { //parseHash() will parse the hash in the url and returns authResult
                // using the authResult returned by parseHash, it can be determined if the user is logged in or not
                if( authResult && authResult.accessToken && authResult.idToken ){
                    this.setSession(authResult);
                    resolve();
                } else if(err){
                    reject(err);
                    console.log(err);
                }
            });
        });
    }
    
    setSession(authResult){
        debugger;
        // Set the Token expiration time
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        // localStorage.setItem('access_token', authResult.accessToken);

        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
    }

    logout(){
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');

        this.auth0.logout({
            returnTo: '',
            clientID: 'pcZ8trYSuvn2qMqE720lSdIPaBQPSHLE'
        })
    }
    
    login(){
        this.auth0.authorize();
    }

    isAuthenticated(){ // fn() to check if the current time is past the Access Token's expiry time

        const expiresAt = Cookies.getJSON('expiresAt');
        return new Date().getTime() < expiresAt;
    }

    clientAuth(){
        return this.isAuthenticated();
    }

    serverAuth(req){ //The request obj(req) is available in the server side from the prop 'ctx' passed into getInitialProps()
    // The cookies on the server may be found in the request obj
        if(req.headers.cookie){
            const expiresAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt='));

            // const cookies = req.headers.cookie;
            // console.log("req.headers.cookie :",cookies);
            // const splitCookies = cookies.split(';');
            // console.log("splitCookies :",splitCookies);
            // const expiresAtCookie = splitCookies.find( c => c.trim().startsWith('expiresAt='));
            // console.log("expiresAtCookies :",expiresAtCookie);
            // const expiresAtArray = expiresAtCookie.split('=');
            // console.log("expiresAtArray :",expiresAtArray);
            // const expiresAt = expiresAtArray[1];
            // console.log("expiresAt : ",expiresAt);
            

            
            if(!expiresAtCookie) {return undefined}; // Return undefined if the expiresAtCookie is not available
            
            const expiresAt = expiresAtCookie.split('=')[1];// split() => returns array of expiresAt text, where 2nd value'[1]' is date

            return new Date().getTime() < expiresAt;

        }

    }
}

const auth0Client = new Auth0();

export default auth0Client;