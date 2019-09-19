import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Callback extends React.Component{
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

export default Callback; 