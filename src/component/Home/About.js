import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className='about-main'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about-head">
                            <h2>Exploring The Great Outdoors With Camping</h2>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-info">
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;