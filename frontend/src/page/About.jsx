// About.js

import React from "react";
import groceryStoreImage from "../assets/hero.jpg";

const About = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={groceryStoreImage}
            alt="Grocery Store"
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">About Our Grocery Shop</h1>
          <p className="text-lg mb-6">
            Welcome to our grocery shop! We are dedicated to providing the
            freshest and highest quality produce and products to our customers.
            Our mission is to make grocery shopping convenient, enjoyable, and
            affordable for everyone.
          </p>
          <p className="text-lg mb-6">
            At our shop, you'll find a wide variety of fresh fruits, vegetables,
            meats, dairy products, pantry staples, and more. We source our
            products from local farmers and trusted suppliers to ensure that
            everything we offer meets our standards of excellence.
          </p>
          <p className="text-lg mb-6">
            Customer satisfaction is our top priority. Whether you're a regular
            shopper or visiting us for the first time, our friendly staff is
            always here to assist you and answer any questions you may have. We
            strive to create a welcoming atmosphere where everyone feels valued
            and appreciated.
          </p>
          <p className="text-lg mb-6">
            Thank you for choosing our grocery shop for your shopping needs. We
            look forward to serving you and becoming your go-to destination for
            fresh, delicious groceries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
