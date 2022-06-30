import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.PNG'
import AVTR2 from '../../assets/avatar2.PNG'
import AVTR3 from '../../assets/avatar3.PNG'
import AVTR4 from '../../assets/avatar4.PNG'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
    avatar:AVTR1,
    name:'name1',
    review: 'review01'
  },
  {
    avatar:AVTR2,
    name:'name2',
    review: 'review02'
  },
  {
    avatar:AVTR3,
    name:'name3',
    review: 'review03'
  },
  {
    avatar:AVTR4,
    name:'name4',
    review: 'review04'
  }
  
]




const Testimonials = () => {
  return (
    <section id='testimonials'>

      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className=' testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="AVTR1" />
            </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
          
          )
        })
      }

        
        </Swiper>
    </section>
  )
}

export default Testimonials