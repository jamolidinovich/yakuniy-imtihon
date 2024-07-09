// src/components/SomeComponent.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/cartSlice";

function SomeComponent() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <button>hello</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => handleAdd(item)}>Add to Cart</button>
            <button onClick={() => handleRemove(item)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SomeComponent;
