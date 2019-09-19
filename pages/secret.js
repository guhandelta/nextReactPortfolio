import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Secret extends Component {
    renderSecretPage(){
        const { isAuthenticated } = this.props.auth;
        
        if(isAuthenticated){
            return(
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>Welcome to the Hood!!....</h1>
                </BasePage> 
            </BaseLayout>
            )
        }else{
            return(
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                    <h1>You're not allowed to view this page</h1>
                    </BasePage> 
                </BaseLayout>
            )

        }

    }
    render() {
        return (
            this.renderSecretPage()
        )
    }
}

export default Secret;