import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HomeContext } from '../../App';

const HomeDetails = () => {
    const { serviceId } = useParams();
    const [home] = useContext(HomeContext);
    const newHome = home.filter((item) => item.id === serviceId)[0];

    console.log(newHome);
    console.log(home);
    console.log(serviceId);



    return (
        <div>
            <h1>This is home details</h1>
            this is params {serviceId}
        </div>
    );
};

export default HomeDetails;
