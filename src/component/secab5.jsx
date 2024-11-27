import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';



class Scab5 extends React.Component {
    render() {
        return (
            <Container fluid className='bckg2'>

                <Row>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <h3>1309</h3>
                        <h6>AWESOME PRODUCTS</h6>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <h3>21569</h3>
                        <h6>HAPPY CUSTOMERS</h6>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <h3>216</h3>
                        <h6>DESIGN AWARDS</h6>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <h3>5816</h3>
                        <h6>DAYS TOGETHER</h6>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default Scab5;