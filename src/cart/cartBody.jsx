import React, { useEffect, useState } from "react";
import CartCard from "./cartCard";
import "./cart.css";
import { Link } from "react-router-dom";

function CartBody() {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("userID");

  const getData = async () => {
    try {
      const res = await fetch(`http://localhost:5005/cart`, {
        method: "GET",
      });
      const data = await res.json();
      const filteredData = data.filter((product) => product.userID === userId);
      setCartItems(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (id) => {
    try {
      const res = await fetch(`http://localhost:5005/cart/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete the object from the API.");
      }

      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Error deleting object:", error);
    }
  };

  return (
    <div id="cart_body">
      {cartItems.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} id="product_card">
            <div>
              <CartCard
                imgSrc={item.productImage}
                productTitle={item.productTitle}
                basePrice={item.basePrice}
                discountPrice={item.discountPrice}
                productLink={item.productLink}
              />
            </div>

            <div>
              <button id="remove_btn" onClick={() => deleteItem(item.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartBody;
