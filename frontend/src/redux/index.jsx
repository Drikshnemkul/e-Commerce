import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer, { initializeUser } from "./userSlice";
import productSliceReducer from "./productSlice";

export const store = configureStore({
  reducer: { user: userSliceReducer, product: productSliceReducer },
});

const userData = JSON.parse(localStorage.getItem("user"));
if (userData) {
  store.dispatch(initializeUser(userData));
}
