import React from 'react';
import {Container ,
        Form ,
        Button

} from 'react-bootstrap';


class Sccontct2 extends React.Component {
    render() {
        return (
            <Container  className='cntctcont2'>

                <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='frmlbl'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='frmlbl'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='frmlbl'>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='frmlbl'>Message</Form.Label>
                        <Form.Control type="Message" placeholder="Message" />
                    </Form.Group>


                    <Button type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>
        )
    }
}
export default Sccontct2;