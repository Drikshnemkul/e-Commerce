import React, { useState } from "react";
import signupImage from "../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/imagetoBase64";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phnNumber: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return { ...preve, [name]: value };
    });
  };

  const handleUploadProfileImage = async (e) => {
    console.log(e.target.files[0]);
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  console.log(import.meta.env.VITE_REACT_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phnNumber, password, confirmPassword } =
      data;
    if (
      firstName &&
      lastName &&
      email &&
      phnNumber &&
      password &&
      confirmPassword
    ) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/signup`,
            data,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const dataRes = response.data;
          console.log(dataRes);
          if (dataRes.alert) {
            toast.success(dataRes.message); // For successful signup
            navigate("/login");
          } else {
            toast.error(dataRes.message); // For email already registered
          }
        } catch (error) {
          console.error("Error occurred:", error);
          toast.error("An error occurred. Please try again later.");
        }
      } else {
        toast.error("Password and confirm password do not match");
      }
    } else {
      toast.warning("All fields are required");
    }
  };

  return (
    <>
      <div className="p-3 md:p-4">
        <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
          {/* <h1 className="text-center text-2xl font-bold ">Sign up</h1> */}
          <div className=" w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
            <img
              src={data.image ? data.image : signupImage}
              alt="signup-animation"
              className="w-full h-full"
            />

            <label htmlFor="profileImage">
              <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                <p className="text-sm p-1 text-white">Upload</p>
              </div>
              <input
                type={"file"}
                id="profileImage"
                accept="image/*"
                className="hidden"
                onChange={handleUploadProfileImage}
              />
            </label>
          </div>

          <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type={"text"}
              value={data.firstName}
              onChange={handleOnChange}
              id="firstName"
              name="firstName"
              className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type={"text"}
              value={data.lastName}
              onChange={handleOnChange}
              id="lastName"
              name="lastName"
              className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
            />

            <label htmlFor="email">Email </label>
            <input
              type={"email"}
              value={data.email}
              onChange={handleOnChange}
              id="email"
              name="email"
              className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
            />

            <label htmlFor="phnNumber">Phone Number </label>
            <input
              type={"phnNumber"}
              value={data.phnNumber}
              onChange={handleOnChange}
              id="phnNumber"
              name="phnNumber"
              className=" mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 "
            />

            <label htmlFor="password">Password </label>
            <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
              <input
                type={showPassword ? "text" : "password"}
                value={data.password}
                onChange={handleOnChange}
                id="password"
                name="password"
                className="  w-full bg-slate-200 border-none outline-none"
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>

            <label htmlFor="confirmPassword"> Confirm Password </label>
            <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={data.confirmPassword}
                onChange={handleOnChange}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-slate-200 border-none outline-none"
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowConfirmPassword}
              >
                {showConfirmPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>

            <button
              type="submit"
              className=" w-full max-w-[150px] m-auto bg-blue-400 hover:bg-blue-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
            >
              Sign Up
            </button>
          </form>

          <p className="text-left text-sm mt-2">
            Already have acount?{" "}
            <Link to={"/login"} className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
