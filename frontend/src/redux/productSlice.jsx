import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Load initial cart data from localStorage
const storedCart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  productList: [],
  cartItem: storedCart || [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      // Check if the user is logged in
      const isLoggedIn = true;

      if (!isLoggedIn) {
        toast.error("Please login to add items to the cart");
        return;
      }

      const check = state.cartItem.some((el) => el._id === action.payload._id);

      if (check) {
        toast.info("Product already added to cart");
      } else {
        toast.success("Product added to cart");
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
        // Update localStorage
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
    },
    deleteCartItem: (state, action) => {
      toast.success("Product deleted from cart");
      const updatedCart = state.cartItem.filter(
        (item) => item._id !== action.payload
      );
      state.cartItem = updatedCart;
      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;
      const price = state.cartItem[index].price;
      const total = price * qtyInc;
      state.cartItem[index].total = total;
      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyDec = --qty;
        state.cartItem[index].qty = qtyDec;
        const price = state.cartItem[index].price;
        const total = price * qtyDec;
        state.cartItem[index].total = total;
        // Update localStorage
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
    },
    clearCart: (state) => {
      state.cartItem = [];
      toast.success("Cart cleared");
      // Update localStorage
      localStorage.removeItem("cart");
    },
  },
});

export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
