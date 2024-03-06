"use client"

import Link from "next/link"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md"


const Header = () => {

  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    setHeaderActive(window.scrollY > 50) // detect scroll
    }
    window.addEventListener('scroll', handleScroll) // add scroll event

    return () => {
      window.removeEventListener('scroll', handleScroll) // clear scroll event
    }
  },[])
  
  return (

    <header className={`
      ${headerActive ? 'h-[100px]': 'h-[124px]'} 
      fixed top-0 max-w-[1920px] w-full bg-primary-200 h-[100px] transition-all z-50`
    }>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href="">
          <Image 
            src={'/assets/img/logo.png'}
            width={117}
            height={55}
            alt="logo"
          />
        </Link>

        {/* mobile nav - hidden on large devices*/}
        <MobileNav containerStyles={`
          ${headerActive ? 'top-[90px]' : 'top-[124px]'}
          ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0' }
          flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium xl:hidden text-white transition-all`
        }/>
        
        {/* desktop nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white hidden xl:flex"/>
      
        {/* hide/open menu button */}
        <div>
          <button
            onClick={() => setOpenNav(!openNav)} 
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header