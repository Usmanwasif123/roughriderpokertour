import React, { useState } from 'react';

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [emailExistsError, setEmailExistsError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const validationErrors = {};
    if (formData.firstName.trim() === '') {
      validationErrors.firstName = 'First name is required';
    }
    if (formData.lastName.trim() === '') {
      validationErrors.lastName = 'Last name is required';
    }
    if (formData.email.trim() === '') {
      validationErrors.email = 'Email is required';
    }
    if (formData.password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // If there are errors, set them and prevent submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Check if email already exists
    try {
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        setEmailExistsError('This email is already registered');
        return;
      } else {
        setEmailExistsError(''); // Clear any previous error message
      }
    } catch (error) {
      console.error('Error checking email existence:', error);
      setEmailExistsError('Error checking email existence');
      return;
    }

    // If no errors, handle registration logic here
    console.log('Form submitted:', formData);

    // Close the modal after successful registration
    onClose();
  };

  const checkEmailExists = async (email) => {
    // Simulate API call to check if email exists
    // Replace this with actual API call to your backend
    return new Promise((resolve, reject) => {
      // Example using setTimeout to simulate async call
      setTimeout(() => {
        const existingEmails = ['test@gmail.com', 'jane.smith@example.com'];
        const exists = existingEmails.includes(email);
        resolve(exists);
      }, 1000); // Simulating delay for demo purposes
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the corresponding error when input changes
    setErrors({ ...errors, [name]: undefined });
    setEmailExistsError('');
  };

  return (
    <div className="fixed inset-0 flex z-40 items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-[#565758] px-4 pb-0 pt-1 rounded-xl shadow-lg flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-xl md:text-2xl lg:text-4xl mb-4 text-[#F3D284]">Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-md lg:text-xl capitalize">First Name</label>
            <input
              type="text"
              className={`w-full px-3 py-1.5 border border-[#353637] rounded bg-[#353637] text-white text-xs md:text-sm lg:text-lg ${
                errors.firstName ? 'border-red-500' : ''
              }`}
              placeholder="John"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-md lg:text-xl capitalize">Last Name</label>
            <input
              type="text"
              className={`w-full px-3 py-1.5 border border-[#353637] rounded bg-[#353637] text-white text-xs md:text-sm lg:text-lg ${
                errors.lastName ? 'border-red-500' : ''
              }`}
              placeholder="Doe"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-md lg:text-xl capitalize mb-1">E-mail</label>
            <input
              type="email"
              className={`w-full px-3 py-1.5 border border-[#353637] rounded bg-[#353637] text-white text-xs md:text-sm lg:text-lg ${
                errors.email || emailExistsError ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            {emailExistsError && (
              <p className="text-red-500 text-sm mt-1">{emailExistsError}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-md lg:text-xl capitalize mb-1">Password</label>
            <input
              type="password"
              className={`w-full px-3 py-1.5 border border-[#353637] rounded bg-[#353637] text-white text-xs md:text-sm lg:text-lg ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
            <label className="block flex justify-start text-[#90BEFF] text-sm md:text-md lg:text-xl lowercase">
              Must contain 8 characters.
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-md lg:text-xl capitalize mb-1">Confirm Password</label>
            <input
              type="password"
              className={`w-full px-3 py-1.5 border border-[#353637] rounded bg-[#353637] text-white text-xs md:text-sm lg:text-lg ${
                errors.confirmPassword ? 'border-red-500' : ''
              }`}
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="flex flex-col justify-between items-center py-3">
            <button
              type="submit"
              className="w-full px-5 py-2 bg-[#F3D284] rounded-3xl rounded text-sm md:text-md lg:text-xl text-black"
            >
              Create Account
            </button>
          </div>
          <div className="text-sm md:text-md lg:text-xl text-white initial py-2 px-2 flex justify-between items-center">
            <h1>
              By continuing, you agree to our{' '}
              <span className="text-[#3C9AFB] underline">Terms of Service</span> and{' '}
              <span className="text-[#3C9AFB] underline">Privacy Policy.</span>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
