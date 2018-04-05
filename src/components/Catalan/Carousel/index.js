import React, { Component } from 'react';
import { Carousel as AntCarousel, Col, Button, Avatar } from 'antd';
import axios from 'axios';

class Carousel extends Component {
    constructor() {
        super();

        this.state = {
            avatars: [],
        };

        this.carousel = null;
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://nutror-mock-server.herokuapp.com/catalan/images',
        }).then(
            res => this.setState({ avatars: res.data.imageUrl }),
            err => console.error(err),
        );
    }

    handleNext = () => {
        this.carousel.next();
    }

    handlePrev = () => {
        this.carousel.prev();
    }

    render() {
        return (
            <div>
                <AntCarousel
                    dots={false}
                    effect='fade'
                    ref={el => this.carousel = el}
                    /*autoplay={true}*/
                >
                    {
                        this.state.avatars.length === 0 ?
                            <Col className='avatar'>
                                <Avatar src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' />
                            </Col>
                        :
                            this.state.avatars.map(avatar => (
                                <Col className='avatar'>
                                    <Avatar src={avatar} />
                                </Col>
                            ))
                    }
                </AntCarousel>
                <div className="skills">
                    <Col span={24} className="skills-itens">
                        <Button onClick={this.handlePrev}><i className="anticon anticon-caret-left"></i></Button> 
                        <Button onClick={this.handleNext}><i className="anticon anticon-caret-right"></i></Button>         
                    </Col>
                </div>
            </div>
        );
    }
}

export default Carousel;