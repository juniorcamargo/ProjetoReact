import React from "react";
import ReactDOM from "react-dom";

import { Row, Col, Avatar } from "antd";

import { Helmet } from "react-helmet";

// init 
const About = () => {
  return (
    <div className="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Row>
        <Col className="avatar" span={24}>
          <Avatar src="http://img.kbhgames.com/2014/09/Dragon-Ball-Advanced-Adventure.jpg" />
        </Col>
      </Row>
  
      <Row>
        <Col className="name" span={24}>
          React Project 
          <span>
            Web Application Developmentt
          </span>
        </Col>
      </Row>
  
      <Row>
        <Col className="text" span={24}>
          React is a declarative, efficient and flexible JavaScript library for developing user interfaces.
        </Col>
      </Row>
    </div>
  )
};

  
  export default About;