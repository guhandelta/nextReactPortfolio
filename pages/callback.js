import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';


class Callback extends React.Component{

    async componentDidMount(){
        await auth0Client.handleAuthentication(); // Inform the Callback page that the user is authenticated, so the user may be redirected-
        //- to the appropirate page
        // Async and Await is used here as handleAuthentication() returns a Promise, so the user redirect to appropriate page, awaits-
        //- the promise object is resolved, on a successful login
        this.props.router.push('/');
    }

    render(){
        return(
            <BaseLayout>
                <BasePage className="blog-page">
                    <h1>Verifying the login.........</h1>                    
                </BasePage>
            </BaseLayout>             
        )
    }
}

export default withRouter(Callback);  