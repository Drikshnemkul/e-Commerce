import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-6">
      <div className="container  mx-auto flex justify-between items-center">
        <div className="text-lg ">
          <h3 className="font-bold  text-xl mb-2">Contact Us</h3>
          <p>Email: amitshop@gmail.com</p>
          <p>Phone: +977 98478578</p>
          <p>Address:kathmandu,Nepal</p>
        </div>
        <div>
          <h3 className="font-bold text-xl  mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p>&copy; 2024 amitshop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
