import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

const namespace = 'http://localhost:4000/';

export default role => Component =>     
    class withAuth extends React.Component{
        
        static async getInitialProps(args){
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
            // Check if the Component has getInitialProps() and call that fn()

            return { ...pageProps };
        }

        renderProtectedPage(){
            const { isAuthenticated, user } = this.props.auth;
            const userRole = user && user[`${namespace}role`];
            let isAuthorized = false;
            debugger;

            if( role ){
                if(userRole && userRole === role){ isAuthorized = true  };
            }else{
                isAuthorized = true;
            }
            
            if(!isAuthenticated){
                return(
                    <BaseLayout {...this.props.auth}>
                        <BasePage>
                            <h1>You're not allowed to view this page, Login to view this page</h1>
                        </BasePage> 
                    </BaseLayout>
                )
            }else if(!isAuthorized){
                return(
                    <BaseLayout {...this.props.auth}>
                        <BasePage>
                            <h1>You're not authorized to access this page</h1>
                        </BasePage> 
                    </BaseLayout>
                )
            }else{
                return( <Component {...this.props} />  );
            }
        }

        render(){
            return this.renderProtectedPage()
        }
    }  
    


