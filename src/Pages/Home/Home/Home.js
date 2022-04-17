import React from 'react';
import SocialLogIn from '../../Login/SocialLogIn/SocialLogIn';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>           
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Footer></Footer>
        </>
    );
};

export default Home;