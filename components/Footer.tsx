"use client"

import Image from "next/image"
import Link from "next/link"
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import CustomButton from "./CustomButton"
import { motion } from "framer-motion"



const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/* info */}
          <div className="flex flex-col gap-4">
            <Link href='#'>
              <Image 
                src={'/assets/img/logo.png'}
                width={117}
                height={55}
                alt=''
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, vel.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illinois</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(510) 710-3464 (510) 640-6326</span>
              </li>
              <li>
                <Link href='#' className="flex items-center gap-4">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>sayhello@email.com</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* blog */}
          <div className="">
            <h4 className="h4 text-accent mb-4">
              Recent blog post
            </h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href='#' className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">How to stay motivated for all exercises</h5>
              </Link>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                September 22, 2024
              </p>
            </div>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href='#' className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Important tips for building muscle</h5>
              </Link>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                November 12, 2024
              </p>
            </div>
            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link href='#' className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Macronutrients: Proteins, Carbohydrates and Fats</h5>
              </Link>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                December 02, 2024
              </p>
            </div>
          </div>
          {/* gallery */}
          <div className="bg-pink-300/20">gallery</div>
          {/* newsletter */}
          <div className="bg-pink-300/20">newsletter</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer