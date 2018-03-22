import React from "react";
import ReactDOM from "react-dom";

import { Row, Col, Button } from "antd";

import { Helmet } from "react-helmet";


const Skills = () => {
    return (
        <div className="skills">
        <Helmet>
            <title>Skills</title>
        </Helmet>
        <Row>
            <Col className="title" span={24}>
            skills
            </Col>
        </Row>
    
        <Row>
            <Col span={24} className="skills-itens">
            <Button> HTML5 </Button> 
            </Col>
        </Row>
        </div>
    )
};
export default Skills;