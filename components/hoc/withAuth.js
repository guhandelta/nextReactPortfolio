import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

export default function(Component) {
    return class withAuth extends React.Component{
<<<<<<< HEAD
<<<<<<< HEAD
        
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
            const { isAuthenticated } = this.props.auth;
<<<<<<< HEAD
<<<<<<< HEAD
            
=======

>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
=======

>>>>>>> 763f56c2d68b240f2e832cc245e462be64169942
            if(isAuthenticated){
                return( <Component { ...this.props } /> )
            }else{
                return(
                    <BaseLayout {...this.props.auth}>
                        <BasePage>
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
            }
        }

        render(){
            return this.renderProtectedPage()
        }
    }
}
