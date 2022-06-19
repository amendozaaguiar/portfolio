import React from 'react';

import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Description from '../components/Description';
import Works from '../components/Works';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Profile></Profile>
            <Description></Description>
            <Skills></Skills>
            <Works></Works>            
            <Footer></Footer>
        </React.Fragment>
    )

}

export default Landing