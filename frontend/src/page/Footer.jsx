import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
// import logo from "/public/favicon_io/android-chrome-192x192.png";

const Footer = () => {
  const quickLink = ["Home", "Products", "About", "Contact"];
  const categoryLink = ["Dairy", "Vegetables", "Fruits", "Bakery"];

  const copyrightLinks = [
    "Terms of Use",
    // <RxDividerVertical />,
    "Privacy Policy",
    // <RxDividerVertical />,
    "Cookie Policy",
  ];
  return (
    <>
      <footer className="bg-slate-200 border-t border-black">
        <div className="w-10/12 mx-auto flex flex-col gap-4 pt-10">
          <div className="content flex">
            <div className="grid grid-cols-3 item-center gap-8">
              <div className="about flex flex-col gap-6">
                <div className="about-text flex flex-col gap-3">
                  <p className="font-semibold text-lg">About</p>
                  <p>
                    We are dedicated to providing the freshest and highest
                    quality produce and products to our customers. Our mission
                    is to make grocery shopping convenient, enjoyable, and
                    affordable for everyone.
                  </p>
                </div>
                <div className="email flex gap-2 items-center">
                  <MdOutlineEmail className="text-2xl" />
                  <p className="font-bold">groceryshop@gmail.com</p>
                </div>
                <div className="phone flex gap-4 items-center">
                  <FiPhoneCall className="text-2xl" />
                  <p className="font-bold">9812345555</p>
                </div>
              </div>

              {/* <div className="quick-link flex justify-center gap-20"> */}
              <div className="flex flex-col items-center gap-4">
                <h2 className="font-semibold text-lg">Quick Link</h2>
                <div className="flex flex-col gap-2">
                  {quickLink.map((item, i) => (
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      key={i}
                      className="hover:underline hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <h2 className="font-semibold text-lg">Category</h2>

                <div className="flex flex-col gap-2">
                  {categoryLink.map((item, i) => (
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      key={i}
                      className="hover:underline hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>

          <hr className="border-black" />

          <div className="copyright flex items-center justify-between py-4">
            <div className="flex gap-2 items-center">
              {/* <img src={logo} alt="" className="w-14" /> */}
              <div>
                <div className="copyright-info flex items-center gap-1">
                  <FaRegCopyright />
                  All Rights Resereved 2024
                </div>
              </div>
            </div>

            <div className="social-link">
              <div className="flex gap-4">
                <Link
                  to={"/"}
                  className="hover:scale-150 transition-transform duration-300 hover:text-white hover:bg-blue-600 hover:rounded-full p-1"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to={"/"}
                  className="hover:scale-150 transition-transform duration-300 hover:text-white hover:bg-blue-400 hover:rounded-full p-1"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to=""
                  className="hover:scale-150 transition-transform duration-300 p-1 hover:bg-gradient-to-tr from-orange-500 via-red-500 via-pink-500  to-blue-600 hover:rounded-md hover:text-white"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to={"/"}
                  className="hover:scale-150 transition-transform duration-300 hover:text-white p-1 hover:bg-blue-400 hover:rounded-md"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div className="links flex gap-4">
              {copyrightLinks.map((item, i) => (
                <div className="flex items-center" key={i}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    key={i}
                    className="hover:text-blue-600 hover:underline"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
