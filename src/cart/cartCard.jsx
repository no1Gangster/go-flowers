import { Text, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function CartCard({ basePrice, discountPrice, productLink }) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("productLink", productLink);
    navigate("/product-desc");
  };

  var dispPrice = {};

  if (discountPrice !== "") {
    dispPrice = (
      <Text fontSize="sm" as="s">
        {basePrice}
      </Text>
    );
  } else {
    dispPrice = (
      <Text fontSize="sm" as="b">
        {basePrice}
      </Text>
    );
  }

  return (
    <div id="cartcard">
      <span>
        <Text as="b">{discountPrice}</Text>
        {dispPrice}
      </span>
    </div>
  );
}

export default CartCard;
