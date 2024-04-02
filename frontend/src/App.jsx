import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Menu from "./page/Menu";
import Signup from "./page/Signup.jsx";
import Login from "./page/Login.jsx";
import Newproduct from "./page/Newproduct.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "./redux/productSlice.jsx";
import Footer from "./page/Footer.jsx";
import Cart from "./page/Cart.jsx";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/product`
      );
      const resData = res.data;
      // console.log(resData);
      dispatch(setDataProduct(resData));
    })();
  }, []);
  // console.log(productData);

  return (
    <>
      <div>
        <ToastContainer />
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path="menu" element={<Menu />} /> */}
      <Route path="menu/:filterby" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="newproduct" element={<Newproduct />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

export default App;
