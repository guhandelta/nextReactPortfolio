import React from 'react';
import Link from 'next/link';

class Index extends React.Component{
    render(){
        return(
            <div>
                <h1>This is the Index Page</h1>  
                <Link href="/">
                    <a> Home </a>  
                </Link>
                <Link href="/about">
                    <a> About </a>  
                </Link>
                <Link href="/blog">
                    <a> Blog </a>
                </Link>
                <Link href="/cv">
                    <a> CV </a>
                </Link>
                <Link href="/portfolios">
                    <a> Portfolios </a>
                </Link>  
            </div>   
        )
    }
}

export default Index 