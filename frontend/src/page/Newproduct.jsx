import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { ImagetoBase64 } from "../utility/imagetoBase64";
import axios from "axios";
import { toast } from "react-toastify";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = async (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    try {
      const imageData = await ImagetoBase64(e.target.files[0]);
      setData((prevData) => ({
        ...prevData,
        image: imageData,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(data);
      const { name, image, category, price } = data;

      if (name && image && category && price) {
        const fetchData = await axios.post(
          `${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/uploadProduct`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const fetchRes = fetchData.data;
        console.log(fetchRes);
        toast.success(fetchRes.message);
        setData(() => {
          return {
            name: "",
            category: "",
            image: "",
            price: "",
            description: "",
          };
        });
      } else {
        toast.error("Enter required fields");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while updating the product");
    }
  };

  return (
    <>
      <div className="p-4">
        <form
          className="m-auto w-full max-w-md p-3 shadow flex flex-col bg-white"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            name="name"
            value={data.name}
            className="bg-slate-200 p-1 my-1"
            onChange={handleOnChange}
          />

          <label htmlFor="category">Category</label>
          <select
            className="bg-slate-200 p-1 my-1"
            id="category"
            name="category"
            value={data.category}
            onChange={handleOnChange}
          >
            <option value={"other"}>select category</option>
            <option value={"fruits"}>Fruits</option>
            <option value={"vegetables"}>Vegetables</option>
            <option value={"dairy"}>Dairy</option>
            <option value={"bakery"}>Bakery</option>
            <option value={"detergent"}>Detergent</option>
          </select>

          <label htmlFor="image">
            Image
            <div className="h-40 w-full bg-slate-200 my-3 rounded cursor-pointer flex items-center justify-center">
              {data.image ? (
                <img src={data.image} alt="productImage" className="h-full" />
              ) : (
                <span className="text-5xl">
                  <FaCloudUploadAlt />
                </span>
              )}

              <input
                type={"file"}
                id="image"
                accept="image/"
                onChange={uploadImage}
                className="hidden"
              />
            </div>
          </label>

          <label htmlFor="price">Price</label>
          <input
            type={"text"}
            name="price"
            value={data.price}
            className="bg-slate-200 p-1 my-1"
            onChange={handleOnChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={data.description}
            rows="2"
            className="bg-slate-200 p-1 my-1 resize-none"
            onChange={handleOnChange}
          ></textarea>

          <button className="bg-green-500 hover:bg-green-600 text-white text-lg font-medium my-2 drop-shadow">
            Save
          </button>
        </form>
      </div>
      ;
    </>
  );
};

export default Newproduct;
