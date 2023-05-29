import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Head = () => {
    return (
        <section className='background-img'>
                <Container>
                    <div className="haeader-main">
                        <Row>
                            <Col>
                                <div className="header-content">
                                    <div className="header-info">
                                        <h1>Your Gateway to Hassle-Free Rentals</h1>
                                        <p>Welcome to Rent Haven, the ultimate destination for effortless renting! Whether you're searching for a cozy apartment, a spacious house, or a convenient office space, our website is here to simplify your rental journey.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
    );
};

export default Head;