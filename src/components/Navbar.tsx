import React from 'react'

const Navbar = () => (
  <nav className=' border-gray-200 px-2 sm:px-4 py-2.5 bg-orange-600'>
    <div className='container flex flex-wrap items-center justify-between mx-auto'>
      <a href='/' className='flex items-center'>
        <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
          Animations Playground
        </span>
      </a>
      <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
        <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
          <li>
            <a
              href='/vectary'
              className='block py-2 pl-3 pr-4 text-white rounded md:p-0 dark:text-white'>
              Vectary
            </a>
          </li>
          <li>
            <a
              href='/lottie-preview'
              className='block py-2 pl-3 pr-4 text-white rounded md:p-0 dark:text-white'>
              Lottie Animation
            </a>
          </li>
          <li>
            <a
              href='/color-composition'
              className='block py-2 pl-3 pr-4 text-white rounded md:p-0 dark:text-white'>
              Mouse Tracking
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
