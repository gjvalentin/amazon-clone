import React, { useEffect } from "react";
import Product from "./Product";
import classes from "./Home.module.css";
import Axios from "axios";

const instagramAPI = (username) => {
  const options = {
    method: "GET",
    url: `https://www.instagram.com/${username}/?__a=1`,
    // params: { username: username },
  };
  return options;
};

function Home() {
  useEffect(() => {
    Axios.request(instagramAPI("bakaprase")).then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div className={classes.Home}>
      <div className={classes.HomeContainer}>
        <img
          className={classes.HomeImage}
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/AStarIsBorn/ASTAR_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB414595666_.jpg"
          alt=""
        />
        <div className={classes.HomeRow}>
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, dough Hook and Whick, 5 litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
            rating={4}
          />
        </div>
        <div className={classes.HomeRow}>
          <Product
            id="4903850"
            title="Samsung LC49RG9055UXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?s300x400_retinamobilexZ$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className={classes.HomeRow}>
          <Product
            id="90829335"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
