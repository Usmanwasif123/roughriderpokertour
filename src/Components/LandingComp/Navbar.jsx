import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showProfileContent, setShowProfileContent] = useState(false);
  const [showNotifiContent, setShowNotifiContent] = useState(false);

  const toggleProfileContent = (e) => {
    e.preventDefault(); // Prevents the default behavior of refreshing the page
    setShowProfileContent(!showProfileContent);
  };

  const toggleNotifiContent = (e) => {
    e.preventDefault(); // Prevents the default behavior of refreshing the page
    setShowNotifiContent(!showNotifiContent);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="">
      <div className="w-full flex flex-wrap items-center justify-between p-4 relative z-20">
        <a href="/">
          <img className="h-12 w-auto md:h-16" src="https://i.ibb.co/ssSQtW1/image.png" alt="Company Logo" />
        </a>
        <div className="md:hidden">
          <button
            id="navbar-toggle"
            onClick={toggleMenu}
            className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:justify-between md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col justify-center items-center font-normal lg:mr-20 p-4 md:p-0 lg:mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:border-0">
            <li>
              <a href="/" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-lg lg:text-2xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 text-white md:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] hover:text-white uppercase" aria-current="page">home</a>
            </li>
            <li>
              <a href="/" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-lg lg:text-2xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 text-white md:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] hover:text-white uppercase">contact us</a>
            </li>
            <li>
              <a href="/" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-lg lg:text-2xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 text-white md:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] hover:text-white uppercase">about us</a>
            </li>
            <li>
              <a href="/" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-lg lg:text-2xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 text-white md:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] hover:text-white uppercase">our service</a>
            </li>
            <li>
              <a href="/" className="font-[Montserrat] block py-2 pl-3 pr-4 text-xl md:text-lg lg:text-2xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 text-white md:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] hover:text-white uppercase">vip</a>
            </li>
            <li>
              <a href="/" className="font-[Montserrat] block py-2 pl-0 pr-0 text-xl md:text-lg lg:text-2xl rounded md:hover:bg-transparent md:border-0 md:hover:text-[#FFE9CA] md:p-0 text-white md:hover:text-[#FFE9CA] focus:text-[#FFE9CA] active:text-[#FFE9CA] hover:text-white uppercase">faq & support</a>
            </li>
          </ul>
          <div className="flex flex-row justify-center items-center space-x-5">
            <div className="relative inline-block">
              <a href="/" onClick={toggleProfileContent} className="cursor-pointer">
                <img src="https://i.ibb.co/cXwcdnh/Group.png" height={30} width={30} alt="user" />
              </a>
              {showProfileContent && (
                <div className="absolute -left-40 bg-[#F3D284] w-5/3 shadow-lg px-1.5 py-5 mt-1.5 rounded-lg text-sm">
                  <div className="font-bold flex gap-1 flex-col items-center justify-center">
                    <div className="flex flex-row items-center">
                      <div className="flex flex-row gap-2 rounded-full py-1 items-center">
                        <img src="https://i.ibb.co/f4hyV98/user.png" className="h-6 w-6" alt="user icon" />
                      </div>
                      <div>
                        <h2 className="text-black text-md">
                          <a href="/edit-your-profile">
                            Manage My Account
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="flex gap-5 rounded-full px-5 py-2 items-center -ml-12">
                        <img src="https://i.ibb.co/QMxC359/Vector.png" className="h-6 w-6" alt="user icon" />
                      </div>
                      <div>
                        <h2 className="text-black text-md">My Reviews</h2>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="flex flex-row gap-5 rounded-full px-5 py-2 items-center -ml-20">
                        <img src="https://i.ibb.co/L5s4Ch4/Icon-logout.png" className="h-6 w-6" alt="user icon" />
                      </div>
                      <div>
                        <h2 className="text-black text-md">Logout</h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative inline-block">
              <a href="/" onClick={toggleNotifiContent} className="cursor-pointer">
                <img src="https://i.ibb.co/ctSxybB/Group-5108.png" height={25} width={25} alt="notification" />
              </a>
              {showNotifiContent && (
                <div className="absolute -left-3 md:-left-52 z-50 bg-[#F3D284] w-60 shadow-lg px-2 pt-2 pb-32 mt-1.5 rounded-xl text-sm">
                  <div className="flex flex-col justify-between items-center bg-[#F0E0B9] rounded-xl p-2">
                    <div className="flex flex-row items-center">
                      <div className="bg-black rounded p-1">
                        <img src="https://i.ibb.co/Hn66fTR/imgpsh-fullsize-anim-9.png" height={20} width={20} alt="rpt-logo" />
                      </div>
                      <div className="flex flex-row justify-between items-center gap-14 m-1">
                        <h1 className="font-bold text-lg">RPT</h1>
                        <span className="font-normal text-md">10min ago</span>
                      </div>
                    </div>
                    <div className="mt-2 p-1 flex justify-start items-center">
                      <p>is simply dummy text of the printing</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
