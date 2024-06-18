import React, { useState } from "react";
import { Button } from "../ui/button";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { Link, useNavigate } from 'react-router-dom'; 
import { AlertBox } from "../alertBox/AlertBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const provider = new GoogleAuthProvider();

const Login = () => {
  const [loginEmail, setLoginEmail] = useState(""); 
  const [loginPassword, setLoginPassword] = useState(""); 
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const validate = () => {
    const newErrors = {};

    if (!loginEmail.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginEmail)) {
      newErrors.email = "Email is invalid";
    }
    if (!loginPassword.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    console.log("Validation errors:", newErrors); // Log validation errors for debugging
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (event) => {
    console.log("Reached login function");
    event.preventDefault(); 
    if (!validate()) {
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("this is user:", user);
      navigate('/'); 
    } catch (error) {
      console.log("login function error", error.message); 
      setErrors({ general: error.message });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithRedirect(auth, provider);
      navigate('/'); 

    } catch (error) {
      console.log("Google sign-in error", error.message); 
      setErrors({ general: error.message });
      navigate('/'); 
    }
  };

  return (
    <>
      <div className="flex justify-center items-center md:p-10 bg-slate-100">
        {errors.general && <AlertBox message={errors.general} />} 

        <div className="flex items-center justify-center text-center h-screen">
          <div className="flex items-center justify-center p-12 bg-white shadow-xl rounded-lg overflow-auto w-[750px]">
            <div>
              <div className="mb-10">
                <div className="font-bold text-3xl">Login Page</div>
                <div className="text-black py-2 hidden">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center flex-wrap gap-3 items-center ">
                <a
                  href="#"
                  onClick={handleGoogleSignIn}
                  className="flex justify-center items-center gap-2 border border-blue-500 bg-white p-3 h-10 w-48 rounded-md text-gray-800 transition ease duration-300 shadow-md hover:bg-blue-100"
                >
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/color/48/google-logo.png"
                    alt="google-logo"
                  />
                  <span>Sign in with Google</span>
                </a>
               
              </div>
              <div className="relative flex items-center justify-center py-8 ">
                <div className="bg-white text-black px-4">Or with email</div>
                <div className="absolute h-px bg-gray-300 w-full z-[-1]"></div>
              </div>
              <form className="flex flex-col gap-5 w-auto mx-auto" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(event) => {
                    setLoginEmail(event.target.value); 
                  }}
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                {errors.email && <AlertBox message={errors.email} />}
                
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(event) => {
                      setLoginPassword(event.target.value); 
                    }}
                    className="p-4 h-10 w-full rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                  />
                  <span
                    onMouseDown={() => setShowPassword(true)}
                    onMouseUp={() => setShowPassword(false)}
                    onMouseLeave={() => setShowPassword(false)}
                    className="absolute right-3 top-3 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                </div>
                {errors.password && <AlertBox message={errors.password} />}
                
                <a href="#" className="text-blue-500 text-sm">
                  Forgot Password?
                </a>
                <Button type="submit">Sign in</Button>
                <div className="text-black text-sm flex justify-center items-center gap-1">
                  Not a Member yet?
                  <Link to="/signup" className="text-blue-500"> 
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
