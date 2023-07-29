import { Text, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function CartCard({
  imgSrc,
  productTitle,
  basePrice,
  discountPrice,
  productLink,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("productLink", productLink);
    navigate("/product-desc");
  };

  var dispPrice = {};

  if (discountPrice !== "") {
    dispPrice = (
      <Text fontSize="md" as="s">
        {basePrice}
      </Text>
    );
  } else {
    dispPrice = (
      <Text fontSize="xl" as="b">
        {basePrice}
      </Text>
    );
  }

  return (
    <div id="cartcard">
      <div id="alldetails">
        <img id="cart_img" src={imgSrc} onClick={handleClick} width="60%" />
        <h3
          style={{ fontWeight: "bold", fontFamily: "monospace" }}
          onClick={handleClick}
        >
          {productTitle}
        </h3>{" "}
        <span>
          <Text as="b">{discountPrice}</Text>
          {dispPrice}
        </span>
        {/* <Text>{productLink}</Text> */}
      </div>
    </div>
  );
}

export default CartCard;
