import React from "react";
import "./Header.module.css";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className={classes.Header}>
      <Link to="/">
        <img
          className={classes.HeaderLogo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className={classes.HeaderSearch}>
        <input className={classes.HeaderInput} />
        <SearchIcon className={classes.HeaderSearchIcon} />
      </div>

      <div className={classes.HeaderNav}>
        <Link to={!user ? "/login" : "/"}>
          <div onClick={handleAuthentication} className={classes.HeaderOption}>
            <span className={classes.HeaderOptionLineOne}>
              Hello {user ? user?.email : "Guess"}
            </span>
            <span className={classes.HeaderOptionLineTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className={classes.HeaderOption}>
            <span className={classes.HeaderOptionLineOne}>Returns</span>
            <span className={classes.HeaderOptionLineTwo}>& Orders</span>
          </div>
        </Link>

        <div className={classes.HeaderOption}>
          <span className={classes.HeaderOptionLineOne}>Your</span>
          <span className={classes.HeaderOptionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={classes.HeaderOptionBasket}>
            <ShoppingBasket />
            <span
              className={
                classes.HeaderOptionLineTwo + " " + classes.HeaderBasketCount
              }
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
