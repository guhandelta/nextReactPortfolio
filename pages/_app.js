// Next.js uses the App component to initialize pages. You can override it and control the page initialization. 
// -Which allows you to do amazing things like:

// Persisting layout between page changes
// Keeping state when navigating pages
// Custom error handling using componentDidCatch
// Inject additional data into pages (for example by processing GraphQL queries)

// This component is the wrapper component for all the pages

import React from 'react';
import app, { Container } from 'next/app';
import auth0 from '../services/auth0';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default class MyApp extends app{
    static async getInitialProps({Component, router, ctx}){
        let pageProps = {}
        // getInitialProps is a best choice to check if the user is authenticated or not, as it runs on both the client and serve,-
        //- for every pages in the application
        const isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);
        // Check the enviroment where getInitialProps() is currently executed and call the appropriate Authenticaiton fn() 
        console.log(isAuthenticated);

        if(Component.getInitialProps){ // Check if the component has getInitialProps()
            pageProps = await Component.getInitialProps(ctx) // Get the parameters for the page here
        }

        return { pageProps }; // Pass the page params as props
    }

    render(){
        const { Component, pageProps } = this.props;

        return(
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}