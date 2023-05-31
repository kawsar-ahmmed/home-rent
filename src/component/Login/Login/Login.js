import React, { useState } from 'react';
import './Login.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import Google__G__Logo from '../../Assets/logo.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../Firebase/useFirebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';




const Login = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const handleLogin = event => {
        event.preventDefault();
        console.log(event.target.email.value)
        // const agree= event.target.trams.checked;
        signInWithEmailAndPassword(email, password);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }

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
                            <Form onSubmit={handleLogin} className='from-full'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email" value={email} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password" value={password} />
                                </Form.Group>
                                <div className="toggle-button">
                                    <p>You don't have an acount? <span onClick={() => navigate('/register')}>Register</span></p>
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check onClick={()=>setAgree(!agree)} type="checkbox" label="I Agree with trams and conditions" name="trams" style={{ "color": "#fff" }}  className={agree? 'text-primary':'text-danger'}/>
                                </Form.Group>
                                <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit" className='button-login' disabled={!agree}>
                                    Login
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

export default Login;