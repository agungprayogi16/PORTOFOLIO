/** @format */
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function header() {
  return (
    <div className='container max-w-[1500px] mx-auto  px-16 relative lg:absolute  top-0 left-0 right-0 bg-slate-500 w '>
      <div className='flex justify-between items-center py-5'>
        <div
          className='text-gradient font-secondary'
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-delay='0'
          data-aos-easing='ease-in-sine'>
          <a href='/'>
            <h1 className='text-[32px] leading-none font-bold '>
              Agung Prayogi
            </h1>
            <h3 className='text-3xl leading-none font-normal'>Purba</h3>
          </a>
        </div>
        <div
          className='flex gap-4'
          data-aos-duration='1000'
          data-aos-easing='ease-in-sine'
          data-aos='fade-left'>
          <a href='https://github.com/agungprayogi16'>
            <FaGithub className='font-bold size-12 hover:scale-110' />
          </a>
          <a href='https://www.linkedin.com/in/agungprayogipurba/'>
            <FaLinkedin className='font-bold size-12 hover:scale-110' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default header;
