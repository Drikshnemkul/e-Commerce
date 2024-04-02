import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";

const CartProduct = ({ id, name, image, price, category, qty, total }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-slate-200 p-2 flex gap-4 rounded border-2 border-slate-300">
        <div className="p-3 bg-white rounded overflow-hidden">
          <img src={image} className="h-28 w-40 object-cover " />
        </div>
        <div className="flex flex-col gap-1  w-full">
          <div className="flex justify-between">
            <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
              {name}
            </h3>
            <div
              className="ml-auto cursor-pointer text-slate-700 hover:text-red-500"
              onClick={() => dispatch(deleteCartItem(id))}
            >
              <RiDeleteBin6Line />
            </div>
          </div>
          <p className=" text-slate-500 font-medium  capitalize">
            Category: {category}
          </p>
          <p className=" text-slate-500 text-base font-bold">
            {" "}
            <span className="text-red-500">Rs </span> <span>{price}</span>{" "}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center ">
              <button
                className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-2  "
                onClick={() => dispatch(increaseQty(id))}
              >
                <FaPlus />
              </button>
              <p className="font-semibold p-1">{qty}</p>
              <button
                className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-2"
                onClick={() => dispatch(decreaseQty(id))}
              >
                <FaMinus />
              </button>
            </div>
            {/* displaying total of cart items  */}
            <div className="flex items-center gap-2 font-bold text-slate-700">
              <p>Total: </p>
              <p> {total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
