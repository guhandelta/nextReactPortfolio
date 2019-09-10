import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from "axios";

class Index extends React.Component{

    static async getInitialProps(){
        let userData ={};
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
             userData = response.data;
        }catch(err){
            console.error(err)
        }

        return{initialData: [1,2,3,4,5], userData}; // userData: userData => userData -> ES6 Feature
        // in ES6 when the key and valur have same names, just mentioning the name once is enough
    }
    
    constructor(props){
        super(props);

        this.state={
            title: 'This is the Index page title'
        }
    }

    componentDidMount(){
        console.log('componentDidMount has been executed');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate has been executed');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount has been executed');
    }

    updateTitle = () =>{
        this.setState({title: 'This is the updated Index page Title'});
    }

    render(){

        const { title } = this.state;
        const {initialData, userData} = this.props;
        return(
                <BaseLayout>
                    <h1>This is the Index Page</h1>   
                    <h2>{ title }</h2>
                    <h2>{ userData.title }</h2>
                    <button onClick={this.updateTitle}>Change Title</button>
                </BaseLayout>             
        )
    }
}

export default Index; 