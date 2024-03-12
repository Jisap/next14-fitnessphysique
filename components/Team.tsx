"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import CustomButton from "./CustomButton"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const trainerData = [
  {
    image: '/assets/img/trainers/david.jpg',
    name: 'David Williams',
    role: 'Body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vero',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ]
  },
  {
    image: '/assets/img/trainers/rosy.jpg',
    name: 'Rosy Rivera',
    role: 'Body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vero',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ]
  },
  {
    image: '/assets/img/trainers/matt.jpg',
    name: 'Matt Stone',
    role: 'Body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vero',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ]
  },
  {
    image: '/assets/img/trainers/sofia.jpg',
    name: 'Sofia Lauren',
    role: 'Body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vero',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ]
  },
]

const Team = () => {
  return (
    <section className='h-screen bg-red-300' id="team">
      <div className="container mx-auto">
        <h2 className="">Our trainers</h2>
        {/* trainers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((trainer, index) => {
            return (
              <div key={index} className="relative w-[320px] h-[360px] mx-auto mb-4">
                <Image 
                  src={trainer.image}
                  fill

                  alt='traner image'
                />
              </div>  
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team