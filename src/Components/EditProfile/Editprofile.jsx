import React from 'react'
import Navbar from '../LandingComp/Navbar';
import Footer from '../LandingComp/Footer'

const Editprofile = () => {
  return (
    <>
    <div className="px-2 md:px-10 bg-[#13181C]">
    <Navbar/>
    </div>
    <div className='bg-[#13181C] w-full text-white flex flex-col justify-between items-center'>
        <div className='bg-[#F3D284] w-1/2 p-0 m-24'>
            <h1 className='p-5 text-[#FE0308] font-medium text-2xl initial'>Edit Your Profile</h1>
            <form className=''>
                <div className='grid grid-cols-1 p-5 gap-6 mt-4 sm:grid-cols-2'>
                <div>
                <label className="text-white dark:text-gray-200" for="username">Username</label>
                <input />
                </div>
                <div>
                <label></label>
                <input />
                </div>
                <div>
                <label></label>
                <input />
                </div>
                <div>
                <label></label>
                <input />
                </div>
                <div>
                <label></label>
                <input />
                <label></label>
                <input />
                <label></label>
                <input />
                </div>
                </div>
            </form>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Editprofile