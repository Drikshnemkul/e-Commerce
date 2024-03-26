import React from "react";

const CardFeature = ({ image, name, price, category, loading }) => {
  return (
    <>
      <div className="w-full min-w-[200px] max-w-[200px] flex flex-col bg-white hover:shadow-lg drop-shadow py-5 px-4 cursor-pointer">
        {image ? (
          <>
            {" "}
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full" alt="" />
            </div>
            <h3 className="font-semibold text-slate-600  uppercase text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-slate-500 font-medium  capitalize">
              {category}
            </p>
            <p className=" text-slate-500 font-bold ">
              {" "}
              <span className="text-red-500">Rs </span> <span>{price}</span>{" "}
            </p>
            <button className="bg-yellow-500 py-1 mt-2 rounded">
              Add to Cart
            </button>
          </>
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            {" "}
            <p>{loading}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CardFeature;
