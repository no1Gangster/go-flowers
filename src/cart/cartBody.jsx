import React, { useEffect, useState } from "react";
import CartCard from "./cartCard";
import { Link } from "react-router-dom";
import "./cart.css";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import { Heading, Image, Flex, Button, Box } from "@chakra-ui/react";
import Topbar from "../components/topbar/topbar";

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
      <Navbar />
      <Topbar />
      <Flex justifyContent="center" w="100%" bg="purple" p="1%">
        <Heading textColor="white">Showing Your Cart</Heading>
      </Flex>
      <Box id="body">
        {cartItems.length === 0 ? (
          <div
            style={{
              backgroundColor: "lightslategray",
              margin: "5%",
              padding: "4%",
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Your cart is empty.
          </div>
        ) : (
          <div id="parent_div">
            {cartItems.map((item) => (
              <div key={item.id} id="product_card">
                <CartCard
                  imgSrc={item.productImage}
                  productTitle={item.productTitle}
                  basePrice={item.basePrice}
                  discountPrice={item.discountPrice}
                  productLink={item.productLink}
                />
                <Button
                  onClick={() => deleteItem(item.id)}
                  id="remove_btn"
                  display={{ base: "none", md: "flex" }}
                >
                  Remove from Cart
                </Button>
                <Button
                  onClick={() => deleteItem(item.id)}
                  id="remove_btn"
                  display={{ base: "flex", md: "none" }}
                >
                  Remove
                </Button>
              </div>
            ))}
            <div id="checkout">
              <p style={{ fontWeight: "bolder" }}>Total: ${chekoutPrice}</p>
              <Link to="/payment">
                <Button
                  colourScheme="purple"
                  id="checkout_btn"
                  onClick={purchase}
                >
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Box>

      <Footer />
    </div>
  );
}

export default CartBody;
