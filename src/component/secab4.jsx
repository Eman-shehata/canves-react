import React from 'react';
import {
    Container,
    Row,
    Col,
    Accordion

} from 'react-bootstrap';



class Scab4 extends React.Component {
    render() {
        return (
            <Container className='accpg'>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='acched'>EXCLUSIVE AND USER-FRIENDLY DESIGN</Accordion.Header>
                                <Accordion.Body>
                                    <p className='accord'>
                                    Euismod, blandit nibh a, vulputate neque. Praesent pellentesque sapien a lorem  congue. <br />
                                    Maecenas lacinia massa consectetur orci rhoncus, quis ornare tellus placerat condimentum <br />
                                    mi dolor vel rutrum nulla lobortis vel etiam mauris sem, pretium eget bibendum eget. <br />
                                    Aliquam sollicitudin vestibulum scelerisque. In at accumsan urna proin nec lectus  <br />
                                    mattis nibh eu accumsan morbi varius elit at ex euismod hendrerit. <br />
                                    <br />
                                    Nunc condimentum mi dolor vel rutrum nulla lobortis vel etiam mauris sem, pretium eget <br />
                                    bibendum eget, suscipit nec nec felis ut id imperdiet leo sed nec tellus vitae lectus <br />
                                    scelerisque aliquet. Vestibulum tincidunt lectus in eros porta tempus lorem stibulum, <br />
                                    scelerisque mattis nibh eu accumsan morbi varius elit at ex euismod hendrerit aenean id <br />
                                    varius urna, euismod pulvinar a sed diam. Curabitur pharetra tortor a ligula aliquet.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='acched'>COMPATIBILITY WITH POPULAR SCREEN RESOLUTIONS</Accordion.Header>
                                <Accordion.Body>
                                    <p className='accord'>
                                    Euismod, blandit nibh a, vulputate neque. Praesent pellentesque sapien a lorem  congue. <br />
                                    Maecenas lacinia massa consectetur orci rhoncus, quis ornare tellus placerat condimentum <br />
                                    mi dolor vel rutrum nulla lobortis vel etiam mauris sem, pretium eget bibendum eget. <br />
                                    Aliquam sollicitudin vestibulum scelerisque. In at accumsan urna proin nec lectus  <br />
                                    mattis nibh eu accumsan morbi varius elit at ex euismod hendrerit. <br />
                                    <br />
                                    Nunc condimentum mi dolor vel rutrum nulla lobortis vel etiam mauris sem, pretium eget <br />
                                    bibendum eget, suscipit nec nec felis ut id imperdiet leo sed nec tellus vitae lectus <br />
                                    scelerisque aliquet. Vestibulum tincidunt lectus in eros porta tempus lorem stibulum, <br />
                                    scelerisque mattis nibh eu accumsan morbi varius elit at ex euismod hendrerit aenean id <br />
                                    varius urna, euismod pulvinar a sed diam. Curabitur pharetra tortor a ligula aliquet.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='acched'>POWERFUL GT3 PAGE BUILDER PLUGIN</Accordion.Header>
                                <Accordion.Body>
                                    <p className='accord'>
                                    Euismod, blandit nibh a, vulputate neque. Praesent pellentesque sapien a lorem  congue. <br />
                                    Maecenas lacinia massa consectetur orci rhoncus, quis ornare tellus placerat condimentum <br />
                                    mi dolor vel rutrum nulla lobortis vel etiam mauris sem, pretium eget bibendum eget. <br />
                                    Aliquam sollicitudin vestibulum scelerisque. In at accumsan urna proin nec lectus  <br />
                                    mattis nibh eu accumsan morbi varius elit at ex euismod hendrerit. <br />
                                    <br />
                                    Nunc condimentum mi dolor vel rutrum nulla lobortis vel etiam mauris sem, pretium eget <br />
                                    bibendum eget, suscipit nec nec felis ut id imperdiet leo sed nec tellus vitae lectus <br />
                                    scelerisque aliquet. Vestibulum tincidunt lectus in eros porta tempus lorem stibulum, <br />
                                    scelerisque mattis nibh eu accumsan morbi varius elit at ex euismod hendrerit aenean id <br />
                                    varius urna, euismod pulvinar a sed diam. Curabitur pharetra tortor a ligula aliquet.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <h4 className='h4acc'>WHAT PEOPLE SAY ABOUT US?</h4>
                        <p className='prg1'>
                        Nunc condimentum mi dolor, vel rutrum nulla lobortis vel. Etiam mauris sem, pretium at <br /> 
                        bibendum eget, suscipit nec nec felis ut id imperdiet leo. Sed nec tellus vitae lectus <br /> 
                        scelerisque aliquet. Vestibulum tincidunt lectus in eros porta tempus lorem vestibulum <br /> 
                        scelerisque mattis nibh eu accumsan morbi varius elit at ex euismod hendrerit aenean id <br /> 
                        varius urna, euismod pulvinar a sed diam.
                        </p>
                        <h6 className='h6acc1'>
                            John Doe, <span className='spnacc'>Businessman</span>
                        </h6>
                        <p className='prg2'>
                        Nunc condimentum mi dolor, vel rutrum nulla lobortis vel. Etiam mauris sem, pretium at <br /> 
                        bibendum eget, suscipit nec nec felis ut id imperdiet leo. Sed nec tellus vitae lectus <br /> 
                        scelerisque aliquet. Vestibulum tincidunt lectus in eros porta tempus lorem vestibulum <br /> 
                        scelerisque mattis nibh eu accumsan morbi varius elit at ex euismod hendrerit aenean id <br /> 
                        varius urna, euismod pulvinar a sed diam.
                        </p>
                        <h6 className='h6acc2'>
                            Anna White, <span className='spnacc'>Housewife</span>
                        </h6>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Scab4;