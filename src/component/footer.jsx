import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquarePinterest } from '@fortawesome/free-brands-svg-icons';





class Ftr extends React.Component {
    render() {
        return (
            <Container fluid className='fotr'>
                <Row>
                    <p className='prgrfftr'>Copyright © 2020 Canvas HTML Template. All Rights Reserved.</p>
                    <div className='icn'>
                        <FontAwesomeIcon icon={faSquareFacebook} className='icn1' />
                        <FontAwesomeIcon icon={faSquareTwitter} className='icn2' />
                        <FontAwesomeIcon icon={faInstagram} className='icn3' />
                        <FontAwesomeIcon icon={faSquarePinterest} className='icn4' />
                    </div>
                </Row>
            </Container>
        )
    }
}
export default Ftr;