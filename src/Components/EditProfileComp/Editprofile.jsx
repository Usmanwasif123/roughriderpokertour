import React, { useState } from 'react';
import Navbar from '../LandingComp/Navbar';
import Footer from '../LandingComp/Footer';

const Editprofile = () => {
  // State variables for input values and errors
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function for checking email format
  const validateEmail = (email) => {
    // Regular expression for basic email format validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validation function for checking if passwords match
  const validatePasswords = () => {
    if (newPassword !== confirmPassword) {
      return 'Passwords do not match';
    }
    return '';
  };

  // Validation function for checking if new password is different from current password
  const validateNewPassword = () => {
    if (newPassword === currentPassword) {
      return 'New password must be different from current password';
    }
    return '';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const newErrors = {};
    if (!firstName) {
      newErrors.firstName = 'First Name is required';
    }
    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!email || !validateEmail(email)) {
      newErrors.email = 'Valid Email is required';
    }
    if (!address) {
      newErrors.address = 'Address is required';
    }
    if (!currentPassword || !newPassword || !confirmPassword) {
      newErrors.passwords = 'All password fields are required';
    } else {
      const passwordError = validatePasswords();
      const newPasswordError = validateNewPassword();
      if (passwordError) {
        newErrors.passwords = passwordError;
      } else if (newPasswordError) {
        newErrors.passwords = newPasswordError;
      }
    }

    // If there are errors, set them and prevent submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here (e.g., API calls, saving data)
    console.log('Form submitted successfully');
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    // Validate email format
    if (!validateEmail(value)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Valid Email is required'
      }));
    } else {
      // Clear the email error if valid
      setErrors(prevErrors => ({
        ...prevErrors,
        email: ''
      }));
    }
  };

  // Handle new password input change
  const handleNewPasswordChange = (e) => {
    const { value } = e.target;
    setNewPassword(value);

    // Check if passwords match and are different from current password
    if (confirmPassword && value !== confirmPassword) {
      setErrors(prevErrors => ({
        ...prevErrors,
        passwords: 'Passwords do not match'
      }));
    } else if (currentPassword && value === currentPassword) {
      setErrors(prevErrors => ({
        ...prevErrors,
        passwords: 'New password must be different from current password'
      }));
    } else {
      // Clear the passwords error if they match and are different from current password
      setErrors(prevErrors => ({
        ...prevErrors,
        passwords: ''
      }));
    }
  };

  // Handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);

    // Check if passwords match and are different from current password
    if (newPassword !== value) {
      setErrors(prevErrors => ({
        ...prevErrors,
        passwords: 'Passwords do not match'
      }));
    } else if (currentPassword && newPassword === currentPassword) {
      setErrors(prevErrors => ({
        ...prevErrors,
        passwords: 'New password must be different from current password'
      }));
    } else {
      // Clear the passwords error if they match and are different from current password
      setErrors(prevErrors => ({
        ...prevErrors,
        passwords: ''
      }));
    }
  };

  return (
    <>
      <div className="px-2 md:px-10 bg-[#13181C]">
        <Navbar />
      </div>
      <div className='bg-[#13181C] w-full flex flex-col justify-between items-center p-10'>
        <div className='bg-[#F3D284] w-3/4 mt-10 mb-10'>
          <h1 className='p-5 text-[#FE0308] font-medium text-2xl initial'>Edit Your Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 p-5 gap-6 mt-0 sm:grid-cols-2 flex flex-col'>
              <div className='flex flex-col'>
                <label className="text-black dark:text-gray-200 capitalize font-normal" htmlFor="firstname">First Name</label>
                <input
                  className='bg-[#FFE29C] p-2 mt-5 text-[#000000] capitalize'
                  placeholder='Md'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
              </div>
              <div className='flex flex-col'>
                <label className="text-black dark:text-gray-200 capitalize font-normal" htmlFor="lastname">Last Name</label>
                <input
                  className='bg-[#FFE29C] p-2 mt-5 text-[#000000] capitalize'
                  placeholder='Rimel'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
              </div>
              <div className='flex flex-col'>
                <label className="text-black dark:text-gray-200 capitalize font-normal" htmlFor="email">Email</label>
                <input
                  className='bg-[#FFE29C] p-2 mt-5 text-[#000000] lowercase'
                  placeholder='rimel1111@gmail.com'
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
              </div>
              <div className='flex flex-col'>
                <label className="text-black dark:text-gray-200 capitalize font-normal" htmlFor="address">Address</label>
                <input
                  className='bg-[#FFE29C] p-2 mt-5 text-[#000000] capitalize'
                  placeholder='Kingston, 5236, United State'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                {errors.address && <span className="text-red-500">{errors.address}</span>}
              </div>
            </div>
            <div className='flex flex-col p-5'>
              <label className="text-black dark:text-gray-200 capitalize font-normal" htmlFor="address">Password Changes</label>
              <input
                className='w-full bg-[#FFE29C] p-2 mb-5 mt-5 text-[#000000] capitalize'
                placeholder='Current Password'
                type='password'
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
              <input
                className='w-full bg-[#FFE29C] p-2 mb-5 mt-0 text-[#000000] capitalize'
                placeholder='New Password'
                type='password'
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
              <input
                className='w-full bg-[#FFE29C] p-2 mb-5 mt-0 text-[#000000] capitalize'
                placeholder='Confirm New Password'
                type='password'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              {errors.passwords && <span className="text-red-500">{errors.passwords}</span>}
            </div>
            <div className='flex flex-row justify-end gap-6 m-5'>
              <button className='border-2 border-[#FE0308] px-10 py-3 rounded capitalize text-[#000000] font-medium' type="button">cancel</button>
              <button className='border-2 border-[#FE0308] bg-[#FE0308] rounded px-10 py-3 capitalize text-white font-medium cursor-progress' type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Editprofile;
