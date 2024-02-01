/** @format */

import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id='home'
      className=' mt-[150px] container max-w-[1200px] mx-auto px-3 items-center '>
      <div
        className='w-full'
        data-aos='zoom-in-down'
        data-aos-duration='2000'
        data-aos-delay='0'
        data-aos-easing='ease-in-sine'>
        <div
          className='block text-center font-secondary font-black text-[30px]'
          dataaos='fade-up'>
          Hello i am
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Agung Prayogi purba",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend Developer",
                3000,
                // "We produce food for Guinea Pigs",
                // 3000,
                // "We produce food for Chinchillas",
                // 3000,
              ]}
              wrapper='span'
              speed={50}
              className='ml-4 text-secondary '
              repeat={Infinity}
            />
          </div>
        </div>
        <div className='max-w-[750px] text-center mx-auto mt-5'>
          Hello, my name is Agung Prayogi Purba, you can call me Agung. I'm 22
          years old.I am still studying at the university majoring in
          information systems. I have experience in IT because I also studied at
          Dumbways as a frontend developer.
        </div>
      </div>
    </div>
  )
}
