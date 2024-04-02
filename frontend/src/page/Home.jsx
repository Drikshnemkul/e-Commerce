import React, { useEffect, useState } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useRef } from "react";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  // console.log(productData);
  const homeProductCartList = productData.slice(0, 6);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetables",
    []
  );
  // console.log(homeProductCartListVegetables);
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeatures = new Array(10).fill(null);

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <>
      <div className="p-2 md:p-4">
        <div className="md:flex gap-4 py-2">
          <div className="md:w-1/2 ">
            <div className="flex gap-3 px-2 bg-slate-400 w-36 items-center rounded-full ">
              <p className="text-sm font-medium text-slate-900">
                Bike Delivery
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
                className="h-7"
              />
            </div>
            <h2 className="text-4xl font-bold md:text-7xl py-3 ">
              The Fastest Delivery in{" "}
              <span className="text-red-700 text">Your Home</span>{" "}
            </h2>
            <p className="py-3 text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              eligendi itaque necessitatibus aspernatur. Reprehenderit ipsa
              eveniet voluptates facilis error hic architecto recusandae fugiat
            </p>

            <button className="font-bold bg-red-500 text-slate-200 py-1 px-4 rounded-md">
              Order Now
            </button>
          </div>

          <div className="md:w-1/2 flex flex-wrap gap-5 p-5 justify-center">
            {homeProductCartList[0]
              ? homeProductCartList.map((el) => {
                  return (
                    <HomeCard
                      key={el._id}
                      id={el._id}
                      image={el.image}
                      name={el.name}
                      // price={el.price}
                      // category={el.category}
                    />
                  );
                })
              : loadingArray.map((el, index) => {
                  return (
                    <HomeCard key={index + "loading"} loading={"loading..."} />
                  );
                })}
          </div>
        </div>

        <div className="">
          <div className="flex w-full items-center">
            <h2 className="font-bold text-2xl text-slate-800 mb-4 ">
              Fresh Vegetables
            </h2>
            <div className="ml-auto flex gap-4">
              <button
                onClick={preveProduct}
                className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
              >
                <GrPrevious />
              </button>
              <button
                onClick={nextProduct}
                className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
              >
                <GrNext />
              </button>
            </div>
          </div>

          <div
            className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all "
            ref={slideProductRef}
          >
            {homeProductCartListVegetables[0]
              ? homeProductCartListVegetables.map((el) => {
                  return (
                    <CardFeature
                      key={el._id + "vegetables"}
                      id={el._id}
                      name={el.name}
                      category={el.category}
                      price={el.price}
                      image={el.image}
                    />
                  );
                })
              : loadingArrayFeatures.map((el, index) => (
                  <CardFeature
                    key={index + "cartLoading"}
                    loading="loading..."
                  />
                ))}
          </div>
        </div>
        <AllProduct heading={"Filter By Category"} />
      </div>
    </>
  );
};

export default Home;
