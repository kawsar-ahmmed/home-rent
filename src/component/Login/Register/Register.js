import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import gLogo from '../../../Assets/Google__G__Logo.svg.webp'
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const navigate = useNavigate();
    // const newValur = (event.mail.value)

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
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
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
                                    <p>Already have an acount? <span onClick={() => navigate('/login')}>Login</span></p>
                                </div>
                                <Button variant="primary" type="submit" className='button-login'>
                                    Submit
                                </Button>
                            </Form>
                            <SocialLogin></SocialLogin>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Register;