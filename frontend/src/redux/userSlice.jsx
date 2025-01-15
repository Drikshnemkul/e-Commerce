import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  image: "",
  lastName: "",
  _id: "",
};

const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : initialState;
};

export const userSlice = createSlice({
  name: "user",
  initialState: loadUserFromLocalStorage(),
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);
      //   state.user = action.payload.data;
      const userData = action.payload.data;
      state._id = action.payload.data._id;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
      localStorage.setItem("user", JSON.stringify(userData));
    },

    logoutRedux: (state, action) => {
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
      localStorage.removeItem("user");
    },

    initializeUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { loginRedux, logoutRedux, initializeUser } = userSlice.actions;

export default userSlice.reducer;
