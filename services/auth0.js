import auth0 from 'auth0-js';

class Auth0{
    constructor(){
        this.auth0 = new auth0.WebAuth({
            domain: 'guhaprasaanth.auth0.com',
            clientID: '9FZS9U2vIrNSpKP9hECiZM3w4pPFzDqm',
            redirecUrl: 'http://loalhost:4000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.login = this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }
}

const auth0Client = new Auth0();

export default auth0Client;