import React from 'react';
import {
    Container,
    Button
} from 'react-bootstrap';


class Scab7 extends React.Component {
    render() {
        return (
            <Container fluid className='bckg3'>
                <h1>SUBSCRIBE FOR OUR NEWSLETTER</h1>
                <p>
                    Subscribe to our newsletter email to get notification about fresh news, latest promos, giveaways and free stuff
                    <br />
                    from GT3Themes. Stay always up-to-date!
                </p>
                <input type='text' className='inpt'/>
                <Button variant="primary" className='BtNblu'>SUBMIT</Button>
            </Container>
        )
    }
}
export default Scab7;