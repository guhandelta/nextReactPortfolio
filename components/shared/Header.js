import React from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    } from 'reactstrap';
import auth0 from '../../services/auth0';
<<<<<<< HEAD
import { userInfo } from 'os';
=======
>>>>>>> 75b1b43e7c22903cf87a13ce26ce3836409a03a9

const BstrNavLink = (props) => {
    const { route, title } = props;  //  .Login} 
    return(
        <Link href={ route }>
            <a className="nav-link port-navbar-link"> { title } </a>  
        </Link>
    )
}

const Login = () => {
  return(
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable"> Login </span>
  )
}

const Logout = () => {
  return(
    <span onClick={auth0.logout} className="nav-link port-navbar-link clickable"> Logout </span>
  )
}

export default class Example extends React.Component {
    constructor(props) {
        super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {

      const { isAuthenticated, user, className } = this.props;

    return (
        <div>
        <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Guhaprasaanth Nandagopal</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem  className="port-navbar-item">
                <BstrNavLink route="/" title="Home" />     
              </NavItem>
              <NavItem  className="port-navbar-item">
                <BstrNavLink route="/about" title="About" />     
              </NavItem>
              <NavItem  className="port-navbar-item">
                <BstrNavLink route="/blog" title="Blog" />     
              </NavItem>
              <NavItem  className="port-navbar-item">
                <BstrNavLink route="/portfolios" title="Portfolio" />     
              </NavItem>
              <NavItem  className="port-navbar-item">
                <BstrNavLink route="/cv" title="CV" />     
              </NavItem>
              { !isAuthenticated &&
                <NavItem  className="port-navbar-item">
                  <Login />     
                </NavItem>
              }
              { isAuthenticated &&
                <NavItem  className="port-navbar-item">
                  <Logout />     
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}
}
