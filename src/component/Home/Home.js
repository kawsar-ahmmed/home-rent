import React, { useContext, useEffect } from 'react';
import './Home.css'
import About from './About';
import Head from './Head';
import { HomeContext } from '../../App';
import HomeItem from '../HomeItem/HomeItem';
import { Container, Row } from 'react-bootstrap';


const Home = () => {
    const [home, seteHome] = useContext(HomeContext);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => seteHome(data))
    }, [seteHome])
    // console.log(home)
    return (
        <div>
            <Head></Head>
            <About />
            <Container className='item-fixed'>
                <Row >
                    {
                        Array.isArray(home) ? (
                            home.map((home) => (
                                <HomeItem key={home.id} home={home} />
                            ))
                        ) : (
                            <p>Loading...</p> // or any other appropriate loading indicator
                        )
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Home;