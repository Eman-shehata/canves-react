import React from 'react';
import ab1 from '../images/about1.jpg';
import ab2 from '../images/about-1.png';
import { Container } from 'react-bootstrap';



class Scab1 extends React.Component {
    render() {
        return (
            <Container fluid className='abcont1'>
                <div>
                    <img src={ab1} className='abut1' />
                </div>
                <div>
                    <img src={ab2} className='abut2' />
                </div>
            </Container>
        )
    }
}
export default Scab1;