import React, { Component } from 'react'
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends Component {
    render() {
        const title = this.props.title;
        const child = this.props.children;
        return (
            <React.Fragment>

                <p>{ title }</p>
                <p>{ child }</p>

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