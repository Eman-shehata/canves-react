import React from 'react';
import { Button, Container } from 'react-bootstrap';



class Scab3 extends React.Component {
    render() {
        return (
            <Container fluid className='bckg1'>
                <div>
                    <h2 className='bgh2'>VISIT OUR WORKSHOP ON APRIL 25, 2020!</h2>
                </div>
                <div className='btnz'>
                    <Button variant="dark" className='btn1'>
                        MORE INFO
                    </Button>
                    <Button variant="danger" className='btn2'>
                        BUY A TICKET
                    </Button>
                </div>

            </Container>
        )
    }
}
export default Scab3;