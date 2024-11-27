import React from 'react';
import {Container ,
        Row ,
        Col ,
        Card
} from 'react-bootstrap';
import im1 from '../images/crd1.jpg';
import im2 from '../images/crd2.jpg';
import im3 from '../images/crd3.jpg';

class Scab6 extends React.Component {
    render() {
        return (
            <Container  className='contpg6'>
                <Row>
                    <h4 className='hedpg6'>What's New in Canvas?</h4>
                    <Col lg={4} md={4} sm={4} xs={4}>
                        <Card className='crdd'>
                            <Card.Img variant="top" src={im1} className='crdimg'/>
                            <Card.Body>
                                <Card.Title className='crdtit'>RED & WHITE</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                    <Card className='crdd'>
                            <Card.Img variant="top" src={im2} className='crdimg'/>
                            <Card.Body>
                                <Card.Title className='crdtit'>WALL-MOUNTED KRAFT ROLL</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                    <Card className='crdd'>
                            <Card.Img variant="top" src={im3} className='crdimg'/>
                            <Card.Body>
                                <Card.Title className='crdtit'>ART SCHOOL</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Scab6;