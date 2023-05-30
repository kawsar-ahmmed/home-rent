import React from 'react';
import './Login.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import Google__G__Logo from '../../Assets/logo.png'
import gLogo from '../../../Assets/Google__G__Logo.svg.webp'



const Login = () => {
    const navigate = useNavigate();
    return (
        <section className='from-section-main'>
            <Container>
                <div className="from-main">
                    <Row>
                        <Col>
                            <div className="from-main-content">
                                <div className="from-content">
                                    <h1>Your Gateway to Hassle-Free Rentals</h1>
                                    <p>Welcome to Rent Haven, the ultimate destination for effortless renting! Whether you're searching for a cozy apartment, a spacious house, or a convenient office space, our website is here to simplify your rental journey.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Form className='from-full'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <div className="toggle-button">
                                    <p>You don't have an acount? <span onClick={() => navigate('/register')}>Register</span></p>
                                </div>
                                <Button variant="primary" type="submit" className='button-login'>
                                    Submit
                                </Button>
                                <div className="Socail-button">
                                    <Button className='Socail-button-google'> 
                                    <img width={25} src={gLogo} alt="" />
                                    Login With Google
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Login;