import React from "react";
import Subtotal from "./Subtotal";
import classes from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className={classes.Checkout}>
      <div className={classes.CheckoutLeft}>
        <img
          className={classes.CheckoutAd}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h4>Hello, {user?.email}</h4>
          <h2 className={classes.CheckoutTitle}>Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className={classes.CheckoutRight}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
