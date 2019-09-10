import React from 'react';
import Header from '../components/shared/Header';

class Index extends React.Component{
    render(){
        return(
            <div>
                <h1>This is the Index Page</h1> 
                <Header title="Header Tab">
                    <p>This is the Header child</p>    
                </Header>               
            </div>               
        )
    }
}

export default Index; 