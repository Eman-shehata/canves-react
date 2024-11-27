import React from 'react';
import {Container ,
        Nav ,
        Navbar ,
} from 'react-bootstrap';
import {BrowserRouter ,
    Link, 
    Route, 
    Routes,
} from "react-router-dom";
import Hme from './home';
import Abut from './about';
import Featrs from './features';
import Blg from './blog';
import Cntct from './contact';
import canvas from '../images/logo.png'

class Hder extends React.Component {
    render() {
        return (
            <div className='heder'>
                <BrowserRouter>
                <Container fluid>
                <Navbar expand="lg" className="bg-body-tertiary" id='hedrcontnr'>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={canvas}  className='img1'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" id='mnuu'>
                               <Link to="/" className='nvbr'>
                                    Home
                               </Link>
                               <Link to="/component/about" className='nvbr'>
                                    ABOUT
                               </Link>
                               <Link to="/component/features" className='nvbr'>
                                    FEATURES
                               </Link>
                               <Link to="/component/blog" className='nvbr'>
                                    BLOG
                               </Link>
                               <Link  to="/component/contact" className='nvbr'>
                                    CONTACT
                               </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </Container>
                <Routes>
                    <Route path='/' element={<Hme />}>
                    </Route>
                    <Route path='/component/about' element={<Abut />}>
                    </Route>
                    <Route path='/component/features' element={<Featrs />}>
                    </Route>
                    <Route path='/component/blog' element={<Blg />}>
                    </Route>
                    <Route path='/component/contact' element={<Cntct />}>
                    </Route>
                </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
export default Hder;