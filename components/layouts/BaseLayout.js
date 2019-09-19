import React from 'react';
import Header from '../shared/Header';

const BaseLayout = (props) => {

    const { className, children, isAuthenticated, user } = props;

    return (
        <React.Fragment>
            <Header isAuthenticated={isAuthenticated} user={user}  />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </React.Fragment>
    )
}

export default BaseLayout;