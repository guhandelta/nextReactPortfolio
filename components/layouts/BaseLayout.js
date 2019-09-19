import React from 'react';
import Header from '../shared/Header';

const BaseLayout = (props) => {

    const { className, children, isAuthenticated } = props;

    return (
        <React.Fragment>
            <Header isAuthenticated={isAuthenticated } />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </React.Fragment>
    )
}

export default BaseLayout;