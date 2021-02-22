import React from "react";
import { useStateValue } from "../StateProvider";
import classes from "./CheckoutProduct.module.css";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className={classes.CheckoutProduct}>
      <img className={classes.CheckoutProductImage} src={image} alt="" />
      <div className={classes.CheckoutProductInfo}>
        <p className={classes.CheckoutProductTitle}>{title}</p>
        <p className={classes.CheckoutProductPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.CheckoutProductRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
