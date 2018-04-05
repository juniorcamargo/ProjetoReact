import React from "react";
import ReactDOM from "react-dom";

// router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// ant design
import 'antd/dist/antd.css';
import { Row, Col, Avatar, Button, Icon, Tooltip } from "antd";

// head
import { Helmet } from "react-helmet";

// custom
import Login from "./components/Login";
import NotFound from "./components/NotFound";

const ConfigRoutes = () => (
  <Router>
    <div>
      {/* content routes */}
      <div className="content">
        <Switch>
          <Route path="/Login" title="Login" component={Login}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </div>
  </Router>
);

// render
ReactDOM.render(
  <ConfigRoutes />,
  document.getElementById('root')
);
