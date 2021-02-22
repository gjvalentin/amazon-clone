import React from "react";
import { useStateValue } from "../StateProvider";
import classes from "./Product.module.css";

const Product = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className={classes.Product}>
      <div className={classes.ProductInfo}>
        <p>{title}</p>
        <p className={classes.ProductPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.ProductRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
