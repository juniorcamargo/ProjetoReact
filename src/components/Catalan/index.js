import React from "react";
import ReactDOM from "react-dom";

import { Row, Col, Avatar, Button } from "antd";

import { Helmet } from "react-helmet";

const Catalan = () => {
    return (
        <div className="about">
            <Helmet>
                <title>Catalan</title>
            </Helmet>
            <Row>
                    <Col className="avatar" span={24}>
                    <Avatar src="http://img.kbhgames.com/2014/09/Dragon-Ball-Advanced-Adventure.jpg" />
                    </Col>
                    <div className="skills">
                    <Col span={24} className="skills-itens">
                    <Button><i class="anticon anticon-caret-left"></i></Button> 
                    <Button><i class="anticon anticon-caret-right"></i></Button>         
                    </Col>
                    </div>
            </Row>
        </div>
   )
};

export default Catalan;