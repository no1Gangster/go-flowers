import React, { useEffect, useState } from "react";
import CartCard from "./cartCard";
import { Link } from "react-router-dom";
import "./cart.css";

function CartBody() {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("userID");
  const [chekoutPrice, setCheckoutPrice] = useState(0);

  const getData = async () => {
    try {
      const res = await fetch(`http://localhost:5005/cart`, {
        method: "GET",
      });
      const data = await res.json();
      const filteredData = data.filter((product) => product.userID === userId);
      setCartItems(filteredData);
      console.log(filteredData);

      setCheckoutPrice(
        filteredData
          .reduce(
            (acc, item) => totalPrice(acc, item.basePrice, item.discountPrice),
            0
          )
          .toFixed(2)
      );
      console.log(chekoutPrice);
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
      getData();
    } catch (error) {
      console.error("Error deleting object:", error);
    }
  };

  const totalPrice = (acc, basePrice, discountPrice) => {
    console.log("acc", acc);
    if (discountPrice.length !== 0) {
      return acc + parseFloat(discountPrice.slice(1, 5));
    } else {
      return acc + parseFloat(basePrice.slice(1, 5));
    }
  };

  const purchase = () => {
    localStorage.setItem("payment", true);
    localStorage.setItem("total", chekoutPrice);
  };

  return (
    <div id="cart_body">
      {cartItems.length === 0 ? (
        <div
          style={{
            backgroundColor: "lightslategray",
            margin: "5%",
          }}
        >
          Your cart is empty.
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} id="product_card">
              <CartCard
                imgSrc={item.productImage}
                productTitle={item.productTitle}
                basePrice={item.basePrice}
                discountPrice={item.discountPrice}
                productLink={item.productLink}
              />
              <button onClick={() => deleteItem(item.id)} id="remove_btn">
                Remove from Cart
              </button>
            </div>
          ))}
          <div>
            <p>Total: ${chekoutPrice}</p>
            <Link to="/payment">
              <button onClick={purchase}>Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartBody;
