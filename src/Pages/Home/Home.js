import React, { useEffect, useState } from "react";
import Announcement from "../../components/announcementOffer/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Categories from "../../components/productCategories/Categories";
import ShoppingItems from "../../components/ShoppingItems/ShoppingItems";
import MainSlider from "../../components/Slider/Slider";
import { setCart } from "../../redux/cartRedux";
import API from "../../API/api";
import axios from "axios";
import "./home.css";
import { useDispatch } from "react-redux";

export default function Home() {
  const [AllProducts, setAllProducts] = useState([]);
  const dispatch=useDispatch()

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get(API + "products/allproducts", {
        headers: {
          token:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIxZDY5YzMxYzUzMjNlOTJjZmRiNjciLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDA0NDQ5MjUsImV4cCI6MTY0MDcwNDEyNX0.asdr3DaxV4kfDBcqg1FTPG_jFJmggdBWfoWkmTONbZk",
        },
      });
      response.data && setAllProducts(response.data);
    };

    const getCart=async()=>{
      const response = await axios.get(API + "cart/find/61b0a0f51340af4c2c2689e8", {
        headers: {
          token:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYTBmNTEzNDBhZjRjMmMyNjg5ZTgiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjQwNDU3OTc0LCJleHAiOjE2NDA3MTcxNzR9.TQDiE6BvN0vmag80gpZxbxPms8cio89SK_INCqg9-go",
        },
      }
      
      );
      dispatch(setCart(response.data));
    }
    getCart();
    getAllProducts();
  }, []);

  console.log(AllProducts);

  // console.log(API);
  return (
    <>
      <Announcement />
      <div className="homePage">
        <Navbar />
        <MainSlider />
        <Categories />
        <ShoppingItems AllProducts={AllProducts} />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}
