import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Categories from "../../components/productCategories/Categories";
import ShoppingItems from "../../components/ShoppingItems/ShoppingItems";
import MainSlider from "../../components/Slider/Slider";
import "./home.css";


export default function Home() {
  return (
    <div className="homePage">
      <Navbar />
      <MainSlider />
      <Categories />
      <ShoppingItems />
      <NewsLetter/>
      <Footer/>
    </div>
  );
}
