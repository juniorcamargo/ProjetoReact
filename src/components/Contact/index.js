import React from "react";
import ReactDOM from "react-dom";

import { Row, Col, Tooltip, Icon } from "antd";

import { Helmet } from "react-helmet";
const Contact = () => {
    return (
    <div className="contact">
        <Helmet>
            <title>Contact</title>
        </Helmet>
        <Row>
            <Col className="title" span={24}>
            social contact
            </Col>
        </Row>

        <Row>
            <Col span={24} className="contact-itens">
            <a href="http://github.com/ffernandomoraes" target="_blank" rel="noopener noreferrer">
                <Tooltip title="GitHub">
                <Icon type="github" />
                </Tooltip>
            </a>

            <a href="https://www.linkedin.com/in/fernando-moraes-349134150/" target="_blank" rel="noopener noreferrer">
                <Tooltip title="Linkedin">
                <Icon type="linkedin" />
                </Tooltip>
            </a>

            <a href="https://codepen.io/feermooraes/" target="_blank" rel="noopener noreferrer">
                <Tooltip title="CodePen">
                <Icon type="codepen" />
                </Tooltip>
            </a>
            </Col>
        </Row>

        <Row>
            <Col className="craft" span={24}>
            React and Ant Design 
            <Icon type="heart-o" />
            </Col>
        </Row>
    </div>
  )
};
export default Contact; 