import React from 'react';

const Register = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    // Handle the Reguster logic here
    console.log('Login form submitted');
    // Assuming the login is successful, we close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex z-40 items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-[#565758] px-4 pb-32 pt-5 rounded-xl shadow-lg flex flex-col">
        <div className='flex flex-row justify-center items-center'>
            <h2 className="text-4xl mb-4 text-[#F3D284]">Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-xl capitalize">First Name</label>
            <input type="text" className="w-full px-3 py-2 border border-[#353637] rounded bg-[#353637] text-white text-lg" placeholder='John' required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-xl capitalize">Last Name</label>
            <input type="password" className="w-full px-3 py-2 border border-[#353637] rounded bg-[#353637] text-white text-lg" placeholder='Doe' required />
            <label className="block flex justify-end text-[#3C9AFB] text-xl capitalize underline">forget password?</label>
          </div>
          <div className="mb-4">
            <label className="block text-white text-xl capitalize mb-1">E-mail</label>
            <input type="text" className="w-full px-3 py-2 border border-[#353637] rounded bg-[#353637] text-white text-lg" placeholder='Enter your email' required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-xl capitalize mb-1">Password</label>
            <input type="password" className="w-full px-3 py-2 border border-[#353637] rounded bg-[#353637] text-white text-lg" placeholder='Enter your password' required />
            <label className="block flex justify-start text-[#90BEFF] text-xl capitalize underline">must contain 8 char.</label>
          </div>
          <div className="mb-4">
            <label className="block text-white text-xl capitalize mb-1">Confirm Password</label>
            <input type="password" className="w-full px-3 py-2 border border-[#353637] rounded bg-[#353637] text-white text-lg" placeholder='Enter your password' required />
            <label className="block flex justify-end text-[#3C9AFB] text-xl capitalize underline">forget password?</label>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button type="submit" className="w-full px-5 py-2 bg-[#F3D284] rounded-3xl rounded text-xl text-black">Create Account</button>
          </div>
          <div className='text-md text-white initial'>
            <h1>By continuing, you agree to our <span className='text-[#3C9AFB]'>Terms of Service</span> and <span className='text-[#3C9AFB]'>Privacy Policy.</span></h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
