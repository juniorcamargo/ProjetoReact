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
import "./main.scss";

import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Catalan from "./components/Catalan";
import NotFound from "./components/NotFound";

const ConfigRoutes = () => (
  <Router>
    <div>

      {/* content routes */}
      <div className="content">
        <Switch>
          <Route exact path="/" title="About" component={About} />
          <Route path="/skills" title="Skills" component={Skills} />
          <Route path="/contact" title="Contact" component={Contact} />
          <Route path='/404' title="Not Found" component={NotFound} />
          <Route path="/Catalan" title="Catalan" component={Catalan}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>

      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/Catalan">Catalan</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </Router>
);

// render
ReactDOM.render(
  <ConfigRoutes />,
  document.getElementById('root')
);
