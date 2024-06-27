import { useState } from "react";
import React from 'react';
import RegisterModule from "../RegisterComp/Register";

const Login = ({ onClose }) => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const handleLoginClick = (e) => {
    e.preventDefault(); // Prevents the default link navigation
    setIsRegisterOpen(true);
  };

  const handleCloseClick = () => {
    setIsRegisterOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    // Handle the login logic here
    console.log('Login form submitted');
    // Assuming the login is successful, we close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex z-40 items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-[#565758] px-4 pb-32 pt-5 rounded-xl shadow-lg flex flex-col">
        <div className='flex flex-row justify-center items-center'>
            <h2 className="text-4xl mb-4 text-[#F3D284]">Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-xl capitalize mb-1">E-mail</label>
            <input type="text" className="w-full px-3 py-2 border border-[#353637] rounded bg-[#353637] text-white text-lg" placeholder='Enter your email' required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-xl capitalize mb-1">Password</label>
            <input type="password" className="w-full px-3 py-2 border border-[#353637] rounded bg-[#353637] text-white text-lg" placeholder='Enter your password' required />
            <label className="block flex justify-end text-[#3C9AFB] text-xl capitalize underline">forget password?</label>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button type="submit" className="w-full px-5 py-2 bg-[#F3D284] rounded-3xl rounded text-xl text-black">Login</button>
            <h1 className='text-white mb-2 mt-2'>or login with</h1>
            <button className='flex flex-row justify-center items-center mb-2 gap-2 border-2 border-[#F3D284] rounded-3xl px-24 py-2 text-xl text-white'>
                <img src='https://i.ibb.co/VH0WkQK/SSO-Icon.png'  alt='google' />
                Login with Google
            </button>
            <div className='cursor-pointer'>
                <h1 className='text-white text-md'>Create Account</h1>
                {isRegisterOpen && <RegisterModule onClose={handleCloseClick} />}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
