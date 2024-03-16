'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import Image from 'next/image';
import Link from 'next/link';

const blogData = [
  {
    img: '/assets/img/blog/post1.jpg',
    date: 'March 10, 2024',
    title: 'Maintain a perfect structure after workout',
    href: ''
  },
  {
    img: '/assets/img/blog/post2.jpg',
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
        <h2 className='h2 text-center mb-8'>Blog</h2>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className='h-[428px] md:max-w-[660px] lg:max-w-none mb-8'
          >
            {blogData.map((post, index) => {
              return(
                <SwiperSlide key={index}>
                  <div className='flex flex-col justify-start h-full max-w-[320px] mx-auto'>
                    <Image 
                      src={post.img}
                      width={320}
                      height={266}
                      alt=''
                      className='mb-6'
                    />
                    <div className='flex flex-col items-start'>
                      <p className='max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1'>{post.date}</p>
                      <Link href={post.href} className='hover:text-accent transition-all duration-300'>
                        <h5 className='h5'>
                          {post.title}
                        </h5>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>  
              )
            })}
          </Swiper>
        </div>
        <div>
          <CustomButton 
            containerStyles='block w-[196px] h-[62px] mx-auto'
            text='View all'
          />
        </div>
      </div>
    </section>
  )
}

export default Blog