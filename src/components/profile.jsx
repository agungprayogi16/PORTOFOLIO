/** @format */

import React from "react"

const DUMMY_DATA = [
  {
    title: "Chakra UI",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.lRb07N34hcsNKufxVWkFoAAAAA&pid=Api&P=0&h=180",
    content:
      "Bootstrap adalah framework HTML, CSS, dan JavaScript yang berfungsi untuk mendesain website responsive dengan cepat dan mudah.",
  },
  {
    title: "Bootstrap",
    image: "./images/2.png",
    content:
      "Chakra adalah framework HTML, CSS, dan JavaScript yang berfungsi untuk mendesain website responsive dengan cepat dan mudah.",
  },
  {
    title: "Css",
    image: "./images/3.png",
    content: "CSS adalah singkatan dari cascading style sheet",
  },
  {
    title: "Html",
    image: "./images/4.png",
    content: "HTML adalah bahasa markup standar untuk membuat halaman website",
  },
  {
    title: "React",
    image: "./images/logo.jpeg",
    content:
      "React JS adalah library JavaScript yang biasa digunakan saat membangun UI suatu website atau aplikasi web  ",
  },
  {
    title: "Tallwind",
    image: "https://www.drupal.org/files/screenshot_361.png",
    content:
      "Tailwind CSS adalah ‘utility-first’ CSS framework yang digunakan untuk membuat User Interface(UI) atau desain dengan cepat.",
  },
]

export default function Profile() {
  return (
    <div
      className='section mt-[160px]'
      id='profile'>
      <div
        className='conatiner mx-auto max-w-[1200px] p-3 overflow-hidden'
        data-aos='zoom-in-down'
        data-aos-duration='2000'
        data-aos-delay='0'
        data-aos-easing='ease-in-sine'>
        <div className='font-secondary text-center font-bold mb-12'>
          <h4 className='text-secondary mb-3 '>Awsome Skill</h4>
          <h2 className='text-gradient font-primary max-w-[700px] mx-auto'>
            Great dolor sit amet. Expedita deserunt voluptates beatae, totam
            rerum recusandae nobis voluptas ipsum reiciendis minus quidem
            ducimus, aperiam itaque facilis fugit magnam odit, vero quod.
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row items-start justify-between'>
          <div className='text-center w-full max-w-[400px] mx-auto mb-[50px]'>
            <div>
              <img
                className='min-w-[300px] min-h-[120px]  pt-[50px] rounded-full   '
                data-aos='flip-right'
                data-aos-duration='2000'
                data-aos-delay='0'
                data-aos-easing='ease-i15sine'
                src='/images/6.jpeg'
                alt=''
              />
            </div>
            <h2 className='text-gradient text-[52px] mt-[30px]'>
              Agung Prayogi purba
            </h2>
          </div>
          <div className='w-full lg:pt-[50px] lg:ml-[50px]'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
              {DUMMY_DATA.map((item, index) => (
                <div
                  className='w-full relative cursor-pointer'
                  key={index}>
                  <div className='bg-white h-full w-full justyfy-center items-center flex rounded-lg overflow-hidden  group p-5'>
                    <img
                      src={item.image}
                      alt=''
                    />
                    <div className='absolute backdrop-blur-xl w-full h-full left-0 bg-primary flex items-center opacity-0 scale-0  group-hover:scale-100 group-hover:opacity-100 rounded-s-md p-3 transition ease-linear '>
                      <div className='w-full text-center flex items-center justify-center flex-col text-white '>
                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                          <h4 className='text-gradient'>{item.title} </h4>
                        </div>
                        <p className='flex text-center items-center'>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
