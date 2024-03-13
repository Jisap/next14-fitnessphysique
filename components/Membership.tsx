"use client"

import { fadeIn } from "@/lib/variants"
import { motion } from "framer-motion"
import MembershipSlider from "./MembershipSlider"



const Membership = () => {
  return (
    <section className="py-8 xl:py-0 lg:h-[95vh] bg-membership bg-cover bg-center relative" id="prices">
      <div className="container mx-auto">
        <h2 className="h2">Membership</h2>
        <div>
          <MembershipSlider />
        </div>
      </div>
    </section>
  )
}

export default Membership