import React, { useState } from "react";
import signupImage from "../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const userData = useSelector((state) => state);
  // console.log(userData.user);

  const dispatch = useDispatch();
  // console.log(data);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return { ...preve, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/login`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const dataRes = response.data; // Use response.data instead of response.json()

        console.log(dataRes);
        if (dataRes.alert) {
          dispatch(loginRedux(dataRes));
          setTimeout(() => {
            navigate("/");
          }, 1000);
          console.log(userData);
          toast.success(dataRes.message);
        } else {
          toast.error(dataRes.message);
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    } else {
      alert("Please enter Email and password");
    }
  };

  return (
    <>
      <div className="p-3 md:p-4">
        <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
          {/* <h1 className="text-center text-2xl font-bold ">Sign up</h1> */}
          <div className=" w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
            <img src={signupImage} alt="signup-animation" className="w-full" />
          </div>

          <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="email">Email </label>
            <input
              type={"email"}
              value={data.email}
              onChange={handleOnChange}
              id="email"
              name="email"
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

            <button
              type="submit"
              className=" w-full max-w-[150px] m-auto bg-blue-400 hover:bg-blue-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
            >
              Login
            </button>
          </form>

          <p className="text-left text-sm mt-2">
            Don't have an acount?{" "}
            <Link to={"/signup"} className="text-blue-500 underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
