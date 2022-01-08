import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const liClass = inCart ? "in-cart" : ""
  const btnClass = inCart ? "remove" : "add"
  
  function handleCart() {
    setInCart(inCart => !inCart)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={btnClass}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
