import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";
import emptyCartImage from "../assets/empty.gif";
import { clearCart } from "../redux/productSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg font-bold text-slate-600 md:text-2xl ">
          Your Cart Items
        </h2>
        {productCartItem[0] ? (
          <div className="my-4 flex gap-3">
            {/* display cart items  */}
            <div className="w-full max-w-3xl ">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    price={el.price}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>

            {/* total cart-items  */}
            <div className="w-full max-w-md bg-slate-100 ml-auto mr-auto">
              <div className="pb-8">
                <h2 className="bg-blue-500 text-white p-2 text-lg font-bold">
                  Sub-Total
                </h2>
                <div className="flex w-full py-2 text-lg border-b">
                  <p>Total Quantity:</p>
                  <p className="ml-auto w-32 font-bold "> {totalQty}</p>
                </div>
                <div className="flex w-full py-2 text-lg border-b ">
                  <p>Total Price:</p>
                  <p className="ml-auto w-32 font-bold">
                    {" "}
                    <span className="text-red-500">Rs </span>
                    {totalPrice}
                  </p>
                </div>
              </div>
              <button className="bg-red-500 w-full text-lg font-bold py-2 text-white">
                Order Now
              </button>

              <button
                className="bg-red-500 w-full text-lg font-bold py-2 mt-5 text-white"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col w-full justify-center items-center">
              <img src={emptyCartImage} className="w-full max-w-sm" />
              <p className="text-slate-500 text-3xl font-bold">Cart is Empty</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
