import React, { useEffect, useState } from "react";
import PriceCard from "./priceCard";
import { useNavigate } from "react-router-dom";
import "../productDesc/productDesc.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Button, Flex, Box } from "@chakra-ui/react";

function ProductDesc() {
  const endpoint = localStorage.getItem("endpoint");
  const link = localStorage.getItem("productLink");
  const [items, setItems] = useState([]);
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await fetch(`http://localhost:5005/${endpoint}`);
      const data = await res.json();
      const filteredData = data.filter(
        (product) => product.productLink === link
      );
      setItems(filteredData);
      setCartItem(filteredData[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addToCart = async (item) => {
    {
      setCartItem(item);
    }

    const data = {
      userID: "Sample@mail",
      productLink: cartItem.productLink,
      productImage: cartItem.productImage,
      productTitle: cartItem.productTitle,
      basePrice: cartItem.basePrice,
      discountPrice: cartItem.discountPrice,
      size: localStorage.getItem("size"),
    };

    try {
      const response = await fetch("http://localhost:5005/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      navigate("/cart");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div id="item_cardbody">
            <Navbar />
            <div
              id="item_card"
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box order={{ base: 1, md: 2 }}>
                <img src={item.productImage} />
              </Box>

              <div id="detail" order={{ base: 2, md: 1 }}>
                {/* <Flex justifyContent="center"> */}
                <PriceCard
                  title={item.productTitle}
                  basePrice={item.basePrice}
                  discountPrice={item.discountPrice}
                />
                {/* </Flex> */}

                <Flex justifyContent="center">
                  <Button colorScheme="green" onClick={addToCart}>
                    Add to Cart
                  </Button>
                </Flex>
              </div>
            </div>
            <Footer />
          </div>
        );
      })}
    </div>
  );
}

export default ProductDesc;
