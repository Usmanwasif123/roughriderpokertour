import React, { useState } from "react";
import RegisterModule from "../RegisterComp/Register"; // Adjust the path as per your project structure
import { useGoogleLogin } from '@react-oauth/google';


const Login = ({ onClose }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitting, setSubmitting] = useState(false); // Track if form is submitting

  const handleCreateAccountClick = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseClick = () => {
    setIsRegisterOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();

    if (!submitting) {
      setSubmitting(true); // Set submitting flag to true

      // Validate email and password only if email/password fields are not empty
      if (email && password) {
        if (password.length < 8) {
          setPasswordError("Password must be at least 8 characters");
          setSubmitting(false); // Reset submitting flag
          return;
        } else {
          setPasswordError("");
        }
      } else {
        setEmailError(email ? "" : "Email is required");
        setPasswordError(password ? "" : "Password is required");
        setSubmitting(false); // Reset submitting flag
        return;
      }

      }
  };

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear error when user starts typing again
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear error when user starts typing again
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return (
    <div className="fixed inset-0 flex z-40 items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-[#565758] px-4 pb-32 pt-5 rounded-xl shadow-lg flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-xl md:text-2xl lg:text-4xl mb-4 text-[#F3D284]">Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-md lg:text-xl capitalize mb-1">E-mail</label>
            <input
              type="text"
              className={`w-full px-3 py-2 border border-[#353637] rounded bg-[#353637] text-white text-xs md:text-sm lg:text-lg ${emailError ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-md lg:text-xl capitalize mb-1">Password</label>
            <input
              type="password"
              className={`w-full px-3 py-2 border border-[#353637] rounded bg-[#353637] text-white text-xs md:text-sm lg:text-lg ${passwordError ? 'border-red-500' : ''}`}
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            <label className="block flex justify-end text-[#3C9AFB] text-sm md:text-md lg:text-xl capitalize underline">
              forget password?
            </label>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button
              type="submit"
              className="w-full px-5 py-2 bg-[#F3D284] rounded-3xl rounded text-sm md:text-md lg:text-xl text-black"
              disabled={submitting} // Disable button while submitting
            >
              Login
            </button>
            <h1 className="text-white text-sm md:text-md lg:text-xl mb-2 mt-2">or login with</h1>
            <button
              type="button" // Use type="button" to prevent form submission
              className="flex flex-row justify-center items-center mb-2 gap-2 border-2 border-[#F3D284] rounded-3xl px-24 py-2 text-sm md:text-md lg:text-xl text-white"
              onClick={() => login()}
            >
              <img
                src="https://i.ibb.co/VH0WkQK/SSO-Icon.png"
                alt="google"
              />
              Login with Google
            </button>
            <div className="cursor-pointer" onClick={handleCreateAccountClick}>
              <h1 className="text-white text-sm md:text-md lg:text-xl">Create Account</h1>
            </div>
          </div>
        </form>
      </div>
      {/* Ensure RegisterModule is closed when `isRegisterOpen` is false */}
      {isRegisterOpen && <RegisterModule onClose={handleCloseClick} />}
    </div>
  );
};

export default Login;
