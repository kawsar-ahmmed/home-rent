import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HomeItem = ({ home }) => {
    console.log(home)
    const { title, image: mainImage, price } = home;

    return (
        <Col lg={4}>
            <div className="home-items">
                <img src={mainImage} alt="" className='img-fluid'/>
                <h3>{title}</h3>
                <h4>Price: </h4>
                {/* <p>Price: ${price}</p> */}
            </div>
        </Col>

    );
};

export default HomeItem;