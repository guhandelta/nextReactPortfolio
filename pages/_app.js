// Next.js uses the App component to initialize pages. You can override it and control the page initialization. 
// -Which allows you to do amazing things like:

// Persisting layout between page changes
// Keeping state when navigating pages
// Custom error handling using componentDidCatch
// Inject additional data into pages (for example by processing GraphQL queries)

// This component is the wrapper component for all the pages

import React from 'react';
import app, { Container } from 'next/app';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default class MyApp extends app{
    static async getInitialProps({Component, router, ctx}){
        let pageProps = {}

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