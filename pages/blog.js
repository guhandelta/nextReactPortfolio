import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Blog extends React.Component{
    render(){
        return(
            <BaseLayout>
                <BasePage className="blog-page">
                    <h1>This is the Blog Page</h1>                    
                </BasePage>
            </BaseLayout>             
        )
    }
}

export default Blog; 