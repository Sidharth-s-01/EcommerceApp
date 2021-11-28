import React, { useState } from "react";
import { FavoriteBorderOutlined, Search, ShoppingBasket } from "@material-ui/icons";
import "./shoppingItems.css";
import { clothImages } from "../../dummyData/dummyClotheImages";
function ShoppingItems() {
  return (
    <div className="ItemsWrapper">
        
      {clothImages.map((cloth) => {
        return (
          <div className="eachItem">
            <img
              src={cloth.image}
              alt="cloth Image"
            />
            <div className="shopIcons">
            <div className="eachIcon">
                <FavoriteBorderOutlined className="icon" style={{"color":"red"}}  />
              </div>
              <div className="eachIcon">
                <Search className="icon" style={{"color":"yellow"}} />
              </div>
              <div className="eachIcon">
                <ShoppingBasket  className="icon" style={{"color":"blue"}}/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingItems;
