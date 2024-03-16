'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'

const blogData = [
  {
    img: '/assets/img/blog/post1.jpg',
    date: 'March 10, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/assets/img/blog/post1.jpg',
    date: 'March 10, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/assets/img/blog/post3.jpg',
    date: 'March 10, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/assets/img/blog/post4.jpg',
    date: 'March 10, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/assets/img/blog/post1.jpg',
    date: 'March 10, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/assets/img/blog/post1.jpg',
    date: 'March 10, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/assets/img/blog/post3.jpg',
    date: 'March 10, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/assets/img/blog/post4.jpg',
    date: 'March 10, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
]

const Blog = () => {
  return (
    <section className="bg-primary-300 text-white py-24" id="blog">
      <div className='container mx-auto'>
        <h2 className='h2'>Blog</h2>
        <div>
          <Swiper>
            {blogData.map((post, index) => {
              return(
                <SwiperSlide key={index}>
                  {post.title}
                </SwiperSlide>  
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Blog