import React from 'react'
import Navbar from '../LandingComp/Navbar';
import Footer from '../LandingComp/Footer';

const Editprofile = () => {
  return (
    <>
    <div className="px-2 md:px-10 bg-[#13181C]">
    <Navbar/>
    </div>
    <div className='bg-[#13181C] w-full flex flex-col justify-between items-center p-10'>
        <div className='bg-[#F3D284] w-3/4 mt-10 mb-10'>
            <h1 className='p-5 text-[#FE0308] font-medium text-2xl initial'>Edit Your Profile</h1>
            <form className=''>
                <div className='grid grid-cols-1 p-5 gap-6 mt-0 sm:grid-cols-2 flex flex-col'>
                <div className='flex flex-col'>
                <label className="text-black dark:text-gray-200 capitalize font-normal" for="firstname">First Name</label>
                <input className='bg-[#FFE29C] p-2 mt-5 text-[#000000] capitalize' placeholder='Md'/>
                </div>
                <div className='flex flex-col'>
                <label className="text-black dark:text-gray-200 capitalize font-normal" for="lastname">Last Name</label>
                <input className='bg-[#FFE29C] p-2 mt-5 text-[#000000] capitalize' placeholder='Rimel'/>
                </div>
                <div className='flex flex-col'>
                <label className="text-black dark:text-gray-200 capitalize font-normal" for="email">Email</label>
                <input className='bg-[#FFE29C] p-2 mt-5 text-[#000000] lowercase' placeholder='rimel1111@gmail.com' />
                </div>
                <div className='flex flex-col'>
                <label className="text-black dark:text-gray-200 capitalize font-normal" for="address">Address</label>
                <input className='bg-[#FFE29C] p-2 mt-5 text-[#000000] capitalize' placeholder='Kingston, 5236, United State' />
                </div>
                </div>
                <div className='flex flex-col p-5'>
                <label className="text-black dark:text-gray-200 capitalize font-normal" for="address">Password Changes</label>
                <input className='w-full bg-[#FFE29C] p-2 mb-5 mt-5 text-[#000000] capitalize' placeholder='Current Password' />
                <input className='w-full bg-[#FFE29C] p-2 mb-5 mt-0 text-[#000000] capitalize' placeholder='New Password' />
                <input className='w-full bg-[#FFE29C] p-2 mb-5 mt-0 text-[#000000] capitalize' placeholder='Confirm New Password' />
                </div>
                <div className='flex flex-row justify-end gap-6 m-5'>
                  <button className='border-2 border-[#FE0308] px-10 py-3 rounded capitalize text-[#000000] font-medium'>cancel</button>
                  <button className='border-2 border-[#FE0308] bg-[#FE0308] rounded px-10 py-3 capitalize text-white font-medium'>Save Changes</button>
                </div>
            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Editprofile