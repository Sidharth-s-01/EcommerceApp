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
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIxZDY5YzMxYzUzMjNlOTJjZmRiNjciLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDA5ODU2OTQsImV4cCI6MTY3MjUyMTY5NH0.nzZCbPqPtEQEcHXkFqCbXjH3eTfXaxeZFQ9Hzc514Z0",
        },
      });
      response.data && setAllProducts(response.data);
    };

    const getCart=async()=>{
      const response = await axios.get(API + "cart/find/61b0a0f51340af4c2c2689e8", {
        headers: {
          token:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYTBmNTEzNDBhZjRjMmMyNjg5ZTgiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjQwOTg1ODM4LCJleHAiOjE2NzI1MjE4Mzh9.OgKbDeL1D2WPYNFVCYG2X3i7v7LtlJyjyAAICbOWREU",
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
