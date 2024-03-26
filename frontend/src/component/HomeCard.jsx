import React from "react";

const HomeCard = ({ name, image, category, price, loading }) => {
  return (
    <>
      <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
        {name ? (
          <>
            {" "}
            <div className="w-40 min-h-[150px]">
              <img src={image} className=" w-full h-full" />
            </div>
            <h3 className="font-semibold text-slate-600 text-center uppercase text-lg">
              {name}
            </h3>
            {/* <p className="text-center text-slate-500 font-medium  capitalize">
              {category}
            </p> */}
            {/* <p className="text-center text-slate-500 font-bold ">
              {" "}
              <span className="text-red-500">Rs </span> <span>{price}</span>{" "}
            </p> */}
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p>{loading}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeCard;