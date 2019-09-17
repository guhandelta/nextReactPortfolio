import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends React.Component{

    async componentDidMount(){ // async + await are used here to wait till the promises is recieved and resolved, and then- 
        //- redirect the user to the appropriate page
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
    }

    render(){
        return(
            <BaseLayout>
                <BasePage className="blog-page">
                    <h1> Verifying login data......</h1>                    
                </BasePage>
            </BaseLayout>             
        )
    }
}

export default withRouter(Callback);