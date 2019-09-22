import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';
import { getSecretData, getSecretDataServer } from '../actions/index';

class Secret extends React.Component {
    static async getInitialProps({req}){
        const anotherSecretData = await getSecretData(req);
        return { anotherSecretData };
    }

    state ={
        secretData: []
    }

    async componentDidMount(){ // Making the req for the data, afte the component has been mounted
        const secretData = await getSecretData();
        this.setState({
            secretData // when var name and value are the same, mentioning the name once is good secretData: secretData => secretData
        });
    }

    displaySecretData(){
        const { secretData } = this.state;

        if(secretData && secretData.length>0){
            return secretData.map((data, index) => {
                return(
                    <div key={index}>
                        <p> { data.title } </p>
                        <p> { data.description } </p>
                    </div>
                )
            })
        }
        return null;
    }

    render() {
        const superSecretValue = {...this.props};
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>Welcome to the Hood!!....</h1>
                    <p>This is a Protected Page</p>
                    <h3>{ this.props.superSecretValue }</h3>
                    {this.displaySecretData()}
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth(Secret);