import React from "react";
import ReactDOM from "react-dom";

import { Row, Col, Icon } from "antd";
const NotFound = () => {
    return (
    <div className="not-found">
      <Row>
            <Col className="text" span={24}>
                Ops, not found
                <span>
                    navigate through the menu below
                    <Icon type="arrow-down" />
                </span>
            </Col>
      </Row>
    </div>
  )
};
export default NotFound;