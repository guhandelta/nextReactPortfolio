import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import axios from 'axios';

class Portfolio extends React.Component {
    
    static async getInitialProps({query}){ // Destructurizing the data object and extracting the query param
        const portfolioId = query.id;
        let portfolio = {};

        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
            portfolio = response.data;
        }catch(err){
            console.log(err);
        }

        return {portfolio};
    }

    render() {
        const { portfolio } = this.props;
        return (
            <BaseLayout>
                <h1> {portfolio.title} </h1>
                <p> Body: {portfolio.body} </p>
                <p> ID: {portfolio.id} </p>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);