import React from 'react'
import Link from 'next/link';

class Header extends React.Component {
    render() {

        return (
            <React.Fragment>

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
                <style jsx>{`
                    a{
                        font-size: 20px;
                        text-decoration: None;
                        color: blue;
                    }
                    a:hover{
                        color: green;
                        text-decoration: underline;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Header;