/** @format */
import { Link } from "react-scroll"
import React from "react"
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi"

export default function Navigation() {
  return (
    <div
      className='fixed lg:flex-col  text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto 
      lg:right-5 bottom-0 right-0  left-0'
      id='navigation'>
      <div className='flex justify-between mx-auto p-2 rounded-full bg-white text-secondary border-secondary border-solid border-[1px] max-w-[200px]  lg:flex-col  flex-row'>
        <Link
          className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer'
          spy={true}
          smooth={true}
          offset={-100}
          to='home'
          activeClass='active'>
          <BiHomeAlt />
        </Link>
        <Link
          className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer'
          spy={true}
          smooth={true}
          offset={-100}
          to='profile'
          activeClass='active'>
          <BiUser />
        </Link>
        <Link
          className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer'
          spy={true}
          smooth={true}
          offset={-100}
          to='portfolio'
          acctiveClass='active'>
          <BiCodeAlt />
        </Link>
      </div>
    </div>
  )
}
