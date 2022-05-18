import React from 'react';
import Gellary from '../../Gellary/Gellary';
import Banner from '../Banner/Banner';
import CarePoints from '../CarePoints/CarePoints';
import Experts from '../Experts/Experts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div style={{backgroundColor:'#607d8b'}}>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Experts></Experts>
            <CarePoints></CarePoints>
            <Gellary></Gellary>
            <Footer></Footer>
        </div>
    );
};

export default Home;