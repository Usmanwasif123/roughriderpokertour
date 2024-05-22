import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="">
      <div className="w-full flex flex-wrap items-center justify-between p-4 relative z-20 bg-transparent">
        <a href="/">
          <img className="h-16 w-auto" src="https://i.ibb.co/ssSQtW1/image.png" alt="Company Logo" />
        </a>
        <div className='md:hidden'>
        <button
          id="navbar-toggle"
          onClick={toggleMenu}
          className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 ml-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        </div>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col justify-center items-center font-normal p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-10 md:border-0">
            <li>
              <a href="/" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 dark:text-white md:dark:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] dark:hover:text-white uppercase" aria-current="page">home</a>
            </li>
            <li>
              <a href="/contact-us" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 dark:text-white md:dark:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] dark:hover:text-white uppercase">contact us</a>
            </li>
            <li>
              <a href="/about-us" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 dark:text-white md:dark:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] dark:hover:text-white uppercase">about us</a>
            </li>
            <li>
              <a href="/our-service" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 dark:text-white md:dark:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] dark:hover:text-white uppercase">our service</a>
            </li>
            <li>
              <a href="/vip" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 dark:text-white md:dark:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] dark:hover:text-white uppercase">vip</a>
            </li>
            <li>
              <a href="/faq-and-support" className="font-[Montserrat] block py-2 pl-0 pr-0 text-xl md:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 dark:text-white md:dark:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] dark:hover:text-white uppercase">faq & support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
