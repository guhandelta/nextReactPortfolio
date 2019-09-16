import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Row, Col, Button, Container } from "reactstrap";
import Typed from 'react-typed';

class Index extends React.Component{

    
    constructor(props){
        super(props);

        this.roles=["Tech Lover", "Team Player", "UI Developer", "Full Stack Web Developer", "Nature Enthusiast", "Blockchain Developer"];
    }
    
    render(){

        return(
            <BaseLayout className="cover">
            <div className="main-section">
              <div className="background-image">
                <img src="/static/images/background-index.png" />
              </div>
          
              <Container>
                <Row>
                  <Col md="6">
                    <div className="hero-section">
                      <div className={`flipper`}>
                        <div className="back">
                          <div className="hero-section-content">
                            <h2> Full Stack Web Developer </h2>
                            <div className="hero-section-content-intro">
                              Checkout my portfolio and job history.
                            </div>
                          </div>
                          <img className="image" src="/static/images/section-1.png"/>
                          <div className="shadow-custom">
                            <div className="shadow-inner"> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" className="hero-welcome-wrapper">
                    <div className="hero-welcome-text">
                      <h1>
                        Welcome to the portfolio website of Guhaprasaanth Nandagopal.
                        Get informed, collaborate and discover projects I was working on through the years!
                      </h1>
                    </div>
                    <Typed
                        loop
                        typeSpeed={60}
                        backSpeed={60}
                        backDelay={1000}
                        strings={this.roles}
                        loopCount={0}
                        showCursor  
                        className="self-typed"
                        cursorChar="|"  
                    />
                    <div className="hero-welcome-bio">
                      <h1>
                        Let's take a look on my work.
                      </h1>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </BaseLayout>
          
        )
    }
}

export default Index; 