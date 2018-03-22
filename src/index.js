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
          <Route path="/OpenEnglishInCatalan" title="OpenEnglishInCatalan" component={OpenEnglishInCatalan}/>
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
              <Link to="/OpenEnglishInCatalan">Catalan</Link>
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

// init 
const About = () => (
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
);

// skills page
const Skills = () => (
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
);

// contact page
const Contact = () => (
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
);


const OpenEnglishInCatalan = () => (
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
);

// not found
const NotFound = () => (
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
);

// render
ReactDOM.render(
  <ConfigRoutes />,
  document.getElementById('root')
);
