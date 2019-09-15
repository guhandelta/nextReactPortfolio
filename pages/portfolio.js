import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'

class Portfolio extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        debugger;
        console.log(this.props.router);
        console.log(this.props.router.query);

        return (
            <BaseLayout>
                <h1>This is a Portfolio</h1>
                <h2>{this.props.router.query.id}</h2>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);