import { Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ".//order.css";

function OrdersCard({
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
    <div id="ordercard_div">
      <div id="mycard_div">
        <img src={imgSrc} onClick={handleClick} />
      </div>
      <div id="cardbody_detail">
        <h3 id="product_title" onClick={handleClick}>
          {productTitle}
        </h3>
        <span>
          <Text as="b" textColor="green">
            {discountPrice}
          </Text>
          {dispPrice}
        </span>
      </div>
    </div>
  );
}

export default OrdersCard;
