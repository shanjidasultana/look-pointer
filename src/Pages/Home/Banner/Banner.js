import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../images/image5.png'
import banner2 from '../../../images/image3.png'
import banner3 from '../../../images/image2.jpg'
import banner4 from '../../../images/image4.png'
import './design.css';


const Banner = () => {
    return (
        <div >
            <Carousel  >
                    <div >
                        <img  src={banner1}  alt="" />
                        <h1 className='heading'>Celebrate  Your Birthday With Our Wishes and Make It Memorable </h1>
                    </div>
                    <div >
                        <img   src={banner2}  alt="" />
                        <h1 className='heading'> Make Some Rock in Your Party By Exclusive Planning</h1>
                         
                    </div>
                    <div >
                        <img   src={banner3}  alt="" />
                        <h1 className='heading' >Make Your Conferance More Effective With Us </h1>

                    </div>
                    <div >
                        <img   src={banner4}  alt="" />
                        /<h1 className='heading'> Joiny Your Wedding With Better and Aligent Planning </h1>

                    </div>
                </Carousel>
        </div>
    );
};

export default Banner;
// class DemoCarousel extends Component {
//     render() {
//         return (
//             
//         );
//     }
// });

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));