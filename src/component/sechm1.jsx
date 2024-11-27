import React from 'react';
import {
    Container,
    Row,
} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import sld1 from '../images/Slid1.jpg';
import sld2 from '../images/Slid2.jpg';
import sld3 from '../images/Slid3.jpg';
import pic1 from '../images/crazol1.png';
import pic11 from '../images/crazol11.png';
import pic2 from '../images/crazol2.png';
import pic22 from '../images/crazol22.png';
import pic3 from '../images/crazol3.png';
import pic33 from '../images/crazol33.png';
import pic4 from '../images/crazol4.png';
import pic44 from '../images/crazol44.png';
import pic5 from '../images/crazol5.png';
import pic55 from '../images/crazol55.png';
import pic6 from '../images/crazol6.png';
import pic66 from '../images/crazol66.png';

class Sechm1 extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img src={sld1} className='img2' />
                            <Carousel.Caption id='wordd1'>
                                <p>
                                <img src={pic1} className='imghm1' /> <img src={pic11} className='imghm11' />  
                                    <br />
                                    <br />
                                    <img src={pic22} className='imghm22' /> <img src={pic2} className='imghm2' />
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={sld2} className='img2' />
                            <Carousel.Caption id='wordd2'>
                                <p>
                                <img src={pic3} className='imghm3' /> <img src={pic33} className='imghm33' />
                                    <br />
                                    <br />
                                    <img src={pic44} className='imghm44' /> <img src={pic4} className='imghm4' />
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={sld3} className='img2' />
                            <Carousel.Caption id='wordd3'>
                                <p>
                                <img src={pic5} className='imghm5' /> <img src={pic55} className='imghm55' />
                                    <br />
                                    <br />
                                    <img src={pic66} className='imghm66' /> <img src={pic6} className='imghm6' />
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        )
    }
}
export default Sechm1;