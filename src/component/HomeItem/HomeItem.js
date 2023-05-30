import React from 'react';
import { Col} from 'react-bootstrap';
import './HomeItem.css'
import { useNavigate } from 'react-router-dom';

const HomeItem = ({ home }) => {
    // console.log(home)
    const { title, image: mainImage, price, short_description, id } = home;
    const navigate = useNavigate();

    return (
        <Col lg={4}>
            <div className="home-items">
                <img src={mainImage} alt="" className='img-fluid'/>
                <h3>{title}</h3>
                <p>Price: {short_description}</p>
                <h4>Price: ${price} </h4>
                <div className="propoerty-button">
                    <button onClick={()=> navigate(`/service-details/${id}`)}>View Property</button>
                </div>
            </div>
        </Col>

    );
};

export default HomeItem;