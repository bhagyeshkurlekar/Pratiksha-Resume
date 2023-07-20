import React from 'react'
import './testimonials.css'

import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.JPG'
import AVTR2 from '../../assets/avatar2.JPG'

const data = [
  {
    avatar: AVTR1,
    name: 'Bhagyesh Kurlekar',
    review: 'Pratiksha is a very beautiful and dedicated human being. Her excellent work has made me earn millions and my company has excelled. Have I mentioned that she is beautiful'
  },

  {
    avatar: AVTR2,
    name: 'Komalpreet Singh',
    review: 'She is a great friend and is very smart and has a lot of skillks. Aichi gann ekdam jhakaas'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                <h5>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
};

export default Testimonials