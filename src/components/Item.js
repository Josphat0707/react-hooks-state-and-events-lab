import React, { useState } from "react";

function Item({ name, category }) {
  function handleCartToggle() {
    setInCart((prevInCart) => !prevInCart);
  }

  const [inCart, setInCart] = useState(false);

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
