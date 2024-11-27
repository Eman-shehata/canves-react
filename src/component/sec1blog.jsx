import React from 'react';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import blg1 from '../images/crd1.jpg';
import blg2 from '../images/crd2.jpg';
import blg3 from '../images/crd3.jpg';
import blg4 from '../images/crd4.jpg';
import blg5 from '../images/crd8.jpg';
import blg6 from '../images/crd6.jpg';
import blg7 from '../images/crd5.jpg';
import blg8 from '../images/crd7.jpg';
import blg9 from '../images/crd12.jpg';
import blg10 from '../images/crd10.jpg';
import blg11 from '../images/crd9.jpg';
import blg12 from '../images/crd11.jpg';




class Scblog extends React.Component {
    render() {
        return (
            <Container fluid className='Blogg'>
                <Row className='rw1'>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg1} className='blg1' />
                        <h4>RED & WHITE</h4>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg2} className='blg2' />
                        <h4>WALL-MOUNTED KRAFT ROLL</h4>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg3} className='blg3' />
                        <h4>ART SCHOOL</h4>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg4} className='blg4' />
                        <h4>FURNITURE DESIGN</h4>
                    </Col>
                </Row>

                <Row className='rw1'>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg5} className='blg5' />
                        <h4>WE LOVE WHAT WE DO</h4>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg6} className='blg6' />
                        <h4>NEW YORK PUBLIC LIBRARY</h4>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg7} className='blg7' />
                        <h4>WOOD BENCH</h4>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg8} className='blg8' />
                        <h4>PLYWOOD CHAIR</h4>
                    </Col>
                </Row>

                <Row className='rw1'>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg9} className='blg9' />
                        <h4>VALENTINE</h4>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg10} className='blg10' />
                        <h4>GARDEN GLORY</h4>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg11} className='blg11' />
                        <h4>ROCKIN’ CHAIR</h4>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3} >
                        <img src={blg12} className='blg12' />
                        <h4>FURNITURE MODELING</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Scblog;