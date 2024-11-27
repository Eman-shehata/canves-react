import React from 'react';
import { Container ,
         Row ,
         Col ,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';




class Sccontct3 extends React.Component {
    render() {
        return (
            <Container fluid className='cntctcont3'>
                <Row>
                    <Col lg={3}  md={3} sm={3} xs={3}>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className='iconcntct'/>
                    <h6>DESIGN DEPARTMENT</h6>
                    <p>+1 800 513 69 80</p>
                    </Col>
                    <Col lg={3}  md={3} sm={3} xs={3}>
                    <FontAwesomeIcon icon={faPuzzlePiece} className='iconcntct'/>
                    <h6>DESIGN DEPARTMENT</h6>
                    <p>+1 800 513 69 80</p>
                    </Col>
                    <Col lg={3}  md={3} sm={3} xs={3}>
                    <FontAwesomeIcon icon={faArrowDownLong} className='iconcntct'/>
                    <h6>DESIGN DEPARTMENT</h6>
                    <p>+1 800 513 69 80</p>
                    </Col>
                    <Col lg={3}  md={3} sm={3} xs={3}>
                    <FontAwesomeIcon icon={faTruck} className='iconcntct'/>
                    <h6>DESIGN DEPARTMENT</h6>
                    <p>+1 800 513 69 80</p>
                    </Col>
                </Row>
                

            </Container>
        )
    }
}
export default Sccontct3;