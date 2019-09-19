import auth0 from 'auth0-js';

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
        
    }

    handleAuthentication(){
        debugger;
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

    login(){
        this.auth0.authorize();
    }

}

const auth0Client = new Auth0();

export default auth0Client;