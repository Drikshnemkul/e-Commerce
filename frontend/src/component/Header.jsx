import React, { useState } from "react";
// import logo from "../assets/logo.png";
import logo from "../assets/android-chrome-512x512.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-toastify";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  // console.log(userData.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast.success("Logout successfully");
    navigate("/");
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);
  // console.log(`${import.meta.env.VITE_REACT_APP_ADMIN_EMAIL}`);
  return (
    <div>
      <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
        {/* desktop  */}
        <div className="flex items-center h-full justify-between">
          <Link to={""}>
            <div className="h-10 flex gap-4 items-center">
              <img src={logo} className="h-full " alt="logo" />
              <p className=" inset-1/4 font-sans font-bold italic text-2xl text-red-800 ">
                Grocery Shop
              </p>

              {/* <img src={logo} className="h-full" alt="logo" /> */}
            </div>
          </Link>
          <div className="flex items-center gap-4 md:gap-7">
            <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
              <Link to={"/"}>Home</Link>
              <Link to={"menu/65fcf009e5fd7ef11f2f5db7"}>Products</Link>
              <Link to={"about"}>About</Link>
              <Link to={"contact"}>Contact</Link>
            </nav>
            <div className="text-2xl text-slate-600 relative">
              <Link to={"cart"}>
                <FiShoppingCart />
                <div className="absolute -top-2 -right-2 text-white  bg-red-500 h-4  w-4 rounded-full m-0 p-0 text-sm  text-center">
                  {cartItemNumber.length}
                </div>
              </Link>
            </div>

            <div className=" text-slate-600 " onClick={handleShowMenu}>
              <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
                {userData.image ? (
                  <img src={userData.image} className="h-full w-full" />
                ) : (
                  <FaUser />
                )}
              </div>

              {showMenu && (
                <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                  {userData.email ===
                    `${import.meta.env.VITE_REACT_APP_ADMIN_EMAIL}` && (
                    <Link to={"newproduct"} className="whitespace-nowrap px-2">
                      New Product
                    </Link>
                  )}

                  {userData.image ? (
                    <p className="cursor-pointer px-2 " onClick={handleLogout}>
                      Logout {} ({userData.firstName})
                    </p>
                  ) : (
                    <Link
                      to={"login"}
                      className="whitespace-nowrap cursor-pointer px-2"
                    >
                      Login
                    </Link>
                  )}
                  <nav className="text-base md:text-lg flex flex-col md:hidden ">
                    <Link to={""} className="px2 py-1">
                      Home
                    </Link>
                    <Link
                      to={"menu/65fcf009e5fd7ef11f2f5db7"}
                      className="px2 py-1"
                    >
                      Menu
                    </Link>
                    <Link to={"about"} className="px2 py-1">
                      About
                    </Link>
                    <Link to={"contact"} className="px2 py-1">
                      Contact
                    </Link>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* mobile */}
      </header>
    </div>
  );
};

export default Header;
