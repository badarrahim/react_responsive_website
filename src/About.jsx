import React from 'react';
import aboutus from '../src/images/aboutus.png';
import { NavLink } from 'react-router-dom';
import Common from '../src/Common'

const About = () => {
    return (

        <>

            <Common
                name="Welcome to About us"
                imgsrc={aboutus}
                visit="/contact"
                btname="Contact Now"
            />
        </>
    );
};

export default About;