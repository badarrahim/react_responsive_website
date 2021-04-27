import React from 'react';
import getstarted from '../src/images/getstarted.png';
import { NavLink } from 'react-router-dom';
import Common from '../src/Common';

const Home = () => {
    return (

        <>
            <Common
                name="Grow your business with"
                imgsrc={getstarted}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;