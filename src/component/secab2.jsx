import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';






class Scab2 extends React.Component {
    render() {
        return (
            <Container fluid className='abcont2'>

                <Row>
                    <Col lg={4} md={4} sm={4} xs={4} className='cardz1'>
                        <FontAwesomeIcon icon={faHeart} className='crdzicn1'/>
                        <br />
                        <h6>Exclusive design</h6>
                        <p>
                            Nunc condimentum mi dolor, vel rutrum nulla
                            <br />
                            lobortis vel etiam mauris sem.
                        </p>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='cardz1'>
                        <FontAwesomeIcon icon={faLightbulb} className='crdzicn1'/>
                        <br />
                        <h6>Affordable Solutions</h6>
                        <p>
                            Nunc condimentum mi dolor, vel rutrum nulla
                            <br />
                            lobortis vel etiam mauris sem.
                        </p>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className='cardz1'>
                        <FontAwesomeIcon icon={faTruck} className='crdzicn1'/>
                        <br />
                        <h6>Fast Delivery</h6>
                        <p>
                            Nunc condimentum mi dolor, vel rutrum nulla
                            <br />
                            lobortis vel etiam mauris sem.
                        </p>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default Scab2;