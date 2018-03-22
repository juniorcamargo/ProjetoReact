import React from "react";
import Carousel from './Carousel';

import { Row } from "antd";

import { Helmet } from "react-helmet";

const Catalan = () => {
    return (
        <div className="about">
            <Helmet>
                <title>Catalan</title>
            </Helmet>
            <Row>
                <Carousel />
            </Row>
        </div>
   )
};

export default Catalan;