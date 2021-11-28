import React from "react";
import "./navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navbarWrapper">
      <div className="navbarLeft">
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            EN
          
          </Button>
          <Menu 
          
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className="menuItem"  onClick={handleClose}>ML</MenuItem>
            <MenuItem className="menuItem" onClick={handleClose}>HD</MenuItem>
            <MenuItem className="menuItem"onClick={handleClose}>FR</MenuItem>
          </Menu>
        </div>
        <div className="searchArea">
          
          <input/>
          <SearchIcon className="searchIcon"/>
        </div>
      </div>
      <div className="navbarCenter">
        <h2>WOMZONE</h2>
      </div>
      <div className="navbarRight">
        <div className="navRightComp">Register</div>
        <div className="navRightComp">Sign In</div>
        <div className="navRightComp">
          <ShoppingCartIcon className="cartIcon"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
