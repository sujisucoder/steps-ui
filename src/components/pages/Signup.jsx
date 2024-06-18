
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { Link, useNavigate } from 'react-router-dom';
import { AlertBox } from '../alertBox/AlertBox';

function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = (field) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'username':
        if (!username.trim()) {
          newErrors.username = "Username is required";
        } else if (!/^[a-zA-Z0-9._]{3,15}$/.test(username)) {
          newErrors.username = "Username must be 3-15 characters long and can contain letters, numbers, underscores, and dots.";
        } else {
          delete newErrors.username;
        }
        break;
      case 'email':
        if (!registerEmail.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(registerEmail)) {
          newErrors.email = "Email is invalid";
        } else {
          delete newErrors.email;
        }
        break;
      case 'phone':
        if (!phone.trim()) {
          newErrors.phone = "Phone number is required";
        }else if(!/^\d{10}$/.test(phone)){
          newErrors.phone = "Phone number must be exactly 10 digits.";

        }
         else {
          delete newErrors.phone;
        }
        break;
      case 'password':
        if (!registerPassword.trim()) {
          newErrors.password = "Password is required";
        } else if (registerPassword.length < 8) {
          newErrors.password = "Password must be at least 8 characters long.";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(registerPassword)) {
          newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        } else {
          delete newErrors.password;
        }
        break;
      case 'confirmPassword':
        if (!confirmPassword.trim()) {
          newErrors.confirmPassword = "Confirm password is required";
        } else if (registerPassword !== confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newErrors.confirmPassword;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const register = async (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log("this is user:", user);
      navigate('/login');
    } catch (error) {
      console.log("register function error", error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center md:p-10 bg-slate-100 ">
        <div className="flex items-center justify-center text-center h-auto">
          <div className="flex items-center justify-center p-12 bg-white shadow-xl rounded-lg overflow-auto w-[750px]">
            <div>
              <div className="mb-10">
                <div className="font-bold text-3xl">Signup Page</div>
              </div>

              <form onSubmit={register} className="flex flex-col gap-10 w-auto md:w-[500px] mx-auto">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={() => validate('username')}
                  placeholder="Username"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                {errors.username && <AlertBox message={errors.username} />}
                
                <input
                  type="email"
                  name="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  onBlur={() => validate('email')}
                  placeholder="Email"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                {errors.email && <AlertBox message={errors.email} />}
                
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => validate('phone')}
                  placeholder="Phone"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                {errors.phone && <AlertBox message={errors.phone} />}
                
                <input
                  type="password"
                  name="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  onBlur={() => validate('password')}
                  placeholder="Password"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                {errors.password && <AlertBox message={errors.password} />}
                
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={() => validate('confirmPassword')}
                  placeholder="Confirm Password"
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                {errors.confirmPassword && <AlertBox message={errors.confirmPassword} />}

                <Button type="submit">
                  Sign up
                </Button>
                <div className="text-black text-sm flex justify-center items-center gap-1">
                  Already a Member ?
                  <Link to="/login" className="text-blue-500">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;


// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase-config';
// import { Link, useNavigate } from 'react-router-dom';
// import { AlertBox } from '../alertBox/AlertBox';

// function Signup() {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [phone, setPhone] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};

//     // Username validation
//     if (!username.trim()) {
//       newErrors.username = "Username is required";
//     } else if (!/^[a-zA-Z0-9._]{3,15}$/.test(username)) {
//       newErrors.username = "Username must be 3-15 characters long and can contain letters, numbers, underscores, and dots.";
//     }

//     // Email validation
//     if (!registerEmail.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(registerEmail)) {
//       newErrors.email = "Email is invalid";
//     }

//     // Phone validation
//     if (!phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     }

//     // Password validation
//     if (!registerPassword.trim()) {
//       newErrors.password = "Password is required";
//     } else if (registerPassword.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long.";
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(registerPassword)) {
//       newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
//     }

//     // Confirm password validation
//     if (!confirmPassword.trim()) {
//       newErrors.confirmPassword = "Confirm password is required";
//     } else if (registerPassword !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const register = async (event) => {
//     event.preventDefault();
//     if (!validate()) {
//       return;
//     }
//     try {
//       const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
//       console.log("this is user:", user);
//       navigate('/login');
//     } catch (error) {
//       console.log("register function error", error.message);
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-center items-center md:p-10 bg-slate-100 ">
//         <div className="flex items-center justify-center text-center h-auto">
//           <div className="flex items-center justify-center p-12 bg-white shadow-xl rounded-lg overflow-auto w-[750px]">
//             <div>
//               <div className="mb-10">
//                 <div className="font-bold text-3xl">Signup Page</div>
//               </div>

//               <form onSubmit={register} className="flex flex-col gap-10 w-auto md:w-[500px] mx-auto">
//                 <input
//                   type="text"
//                   name="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   onBlur={validate}
//                   placeholder="Username"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {errors.username && <AlertBox message={errors.username} />}
                
//                 <input
//                   type="email"
//                   name="email"
//                   value={registerEmail}
//                   onChange={(e) => setRegisterEmail(e.target.value)}
//                   onBlur={validate}
//                   placeholder="Email"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {errors.email && <AlertBox message={errors.email} />}
                
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   onBlur={validate}
//                   placeholder="Phone"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {errors.phone && <AlertBox message={errors.phone} />}
                
//                 <input
//                   type="password"
//                   name="password"
//                   value={registerPassword}
//                   onChange={(e) => setRegisterPassword(e.target.value)}
//                   onBlur={validate}
//                   placeholder="Password"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {errors.password && <AlertBox message={errors.password} />}
                
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   onBlur={validate}
//                   placeholder="Confirm Password"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {errors.confirmPassword && <AlertBox message={errors.confirmPassword} />}

//                 <Button type="submit">
//                   Sign up
//                 </Button>
//                 <div className="text-black text-sm flex justify-center items-center gap-1">
//                   Already a Member ?
//                   <Link to="/login" className="text-blue-500">
//                     Login
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Signup;





// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase-config';
// import { Link, useNavigate } from 'react-router-dom';
// import { Alert } from "@/components/ui/alert";
// import { AlertBox } from '../alertBox/AlertBox';

// function Signup() {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [phone, setPhone] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};

//     if (!username.trim()) {
//       newErrors.username = "Username is required";
//     }
//     if (!registerEmail.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(registerEmail)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     }
//     if (!registerPassword.trim()) {
//       newErrors.password = "Password is required";
//     }
//     if (!confirmPassword.trim()) {
//       newErrors.confirmPassword = "Confirm password is required";
//     } else if (registerPassword !== confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const register = async (event) => {
//     event.preventDefault();
//     if (!validate()) {
//       return;
//     }
//     try {
//       const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
//       console.log("this is user:", user);
//       navigate('/login');
//     } catch (error) {
//       console.log("register function error", error.message);
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-center items-center md:p-10 bg-slate-100 ">
//         <div className="flex items-center justify-center text-center h-auto">
//           <div className="flex items-center justify-center p-12 bg-white shadow-xl rounded-lg overflow-auto w-[750px]">
//             <div>
//               <div className="mb-10">
//                 <div className="font-bold text-3xl">Signup Page</div>
//               </div>

//               <form onSubmit={register} className="flex flex-col gap-10 w-auto md:w-[500px] mx-auto">
//                 <input
//                   type="text"
//                   name="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Username"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {errors.username && <AlertBox message={errors.username} />}
                
//                 <input
//                   type="email"
//                   name="email"
//                   value={registerEmail}
//                   onChange={(e) => setRegisterEmail(e.target.value)}
//                   placeholder="Email"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {/* {errors.email && <Alert className="border border-destructive bg-white text-black">{errors.email}</Alert>} */}
//                 {errors.email && <AlertBox message={errors.email} />}

                
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="Phone"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {/* {errors.phone && <Alert type="error">{errors.phone}</Alert>} */}
//                 {errors.phone && <AlertBox message={errors.phone} />}

                
//                 <input
//                   type="password"
//                   name="password"
//                   value={registerPassword}
//                   onChange={(e) => setRegisterPassword(e.target.value)}
//                   placeholder="Password"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {/* {errors.password && <Alert type="error">{errors.password}</Alert>} */}
//                 {errors.password && <AlertBox message={errors.password} />}

                
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="Confirm Password"
//                   className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
//                 />
//                 {/* {errors.confirmPassword && <Alert type="error">{errors.confirmPassword}</Alert>} */}
//                 {errors.confirmPassword && <AlertBox message={errors.confirmPassword} />}


//                 <Button type="submit">
//                   Sign up
//                 </Button>
//                 <div className="text-black text-sm flex justify-center items-center gap-1">
//                   Already a Member ?
//                   <Link to="/login" className="text-blue-500">
//                     Login
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Signup;
