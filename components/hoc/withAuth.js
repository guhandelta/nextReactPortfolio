import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

<<<<<<< HEAD
const namespace = 'http://localhost:4000/';

export default role => Component =>     
    class withAuth extends React.Component{
=======
export default function(Component) {
    return class withAuth extends React.Component{
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 80fd6bfe361fa693ca86557b71233e95794c17af
        
=======

>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
=======

>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
        static async getInitialProps(args){
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
            // Check if the Component has getInitialProps() and call that fn()

            return { ...pageProps };
        }

        renderProtectedPage(){
<<<<<<< HEAD
            const { isAuthenticated, user } = this.props.auth;
            const userRole = user && user[`${namespace}role`];
            let isAuthorized = false;

            if( role ){
                if(userRole && userRole === role){ isAuthorized = true  };
=======
            const { isAuthenticated } = this.props.auth;
<<<<<<< HEAD
<<<<<<< HEAD
            
=======

>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
=======

>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
            if(isAuthenticated){
                return( <Component { ...this.props } /> )
>>>>>>> 80fd6bfe361fa693ca86557b71233e95794c17af
            }else{
                isAuthorized = true;
            }
            
            if(!isAuthenticated){
                return(
                    <BaseLayout {...this.props.auth}>
                        <BasePage className="">
                            <h1>You're not allowed to view this page, Login to view this page</h1>
<<<<<<< HEAD
<<<<<<< HEAD
                        </BasePage> 
=======
                        </BasePage> \
>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
=======
                        </BasePage> \
>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
                    </BaseLayout>
                )
            }else if(!isAuthorized){
                return(
                    <BaseLayout {...this.props.auth}>
                        <BasePage className="">
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
    


