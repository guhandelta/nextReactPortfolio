import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';
<<<<<<< HEAD
import { getSecretData, getSecretDataServer } from '../actions/index';

class Secret extends React.Component {
    static async getInitialProps({req}){
        const anotherSecretData = await getSecretData(req);
=======
import { getSecretData, getSecretDataServer } from '../actions';

class Secret extends React.Component {

    static async getInitialProps({req}){
        const anotherSecretData = await getSecretData(req);
        // call getSecretData() if the call is made from the browser or call getSecretDataServer() if the call is made from server

>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
        return { anotherSecretData };
    }

    state ={
        secretData: []
    }

    async componentDidMount(){ // Making the req for the data, afte the component has been mounted
        const secretData = await getSecretData();
<<<<<<< HEAD
=======

>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
        this.setState({
            secretData // when var name and value are the same, mentioning the name once is good secretData: secretData => secretData
        });
    }

    displaySecretData(){
        const { secretData } = this.state;

<<<<<<< HEAD
        if(secretData && secretData.length>0){
            return secretData.map((data, index) => {
                return(
                    <div key={index}>
=======
        if( secretData && secretData.length>0 ){
            return secretData.map((data, index) => {
                return(
                    <div key={ index }>
>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
                        <p> { data.title } </p>
                        <p> { data.description } </p>
                    </div>
                )
            })
        }
        return null;
    }

    render() {
<<<<<<< HEAD
        const superSecretValue = {...this.props};
=======
        debugger;
>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>Welcome to the Hood!!....</h1>
                    <p>This is a Protected Page</p>
<<<<<<< HEAD
                    <h3>{ this.props.superSecretValue }</h3>
=======
                    <h3>{ this.props.anotherSecretData }</h3>
>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
                    {this.displaySecretData()}
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth(Secret);