import { useState } from 'react'
import './Carousel_Slider.css'
import Slider from "react-slick";


import { data } from './Data'


function Carousel_Slider() {
    const settings = {
        infinite: true,
        speed: 500,
        vertical : true,
        arrows: false, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover:false,
        draggable: false
    };

     
    return(
        <div>
        <div className='Carousel_Container'>
        <Slider  {...settings}>
          
            {
              data.map((ele) => {
                return (
                    <div  key={ele.key}>
                      <div className="Carousel_li">
                      <img className="Carousel_img" src={ele.img} alt={ele.alt}/>
                      {ele.text} <br className="Carousel_Br"/>{ele.text_br}
                      </div>
                    </div>
                  
                )
              })
            }
          
         </Slider>   
        </div>
    </div>
    )
}

export default Carousel_Slider