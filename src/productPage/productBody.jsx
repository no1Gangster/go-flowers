import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import "./productBody.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { RepeatIcon } from "@chakra-ui/icons";

function ProductBody() {
  //const categeory = localstorage.getItem("categeory");
  //${categeory}

  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(30);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5005/summer`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const priceHandle = (product) => {
    //If discount price available, then old price is StrikedThrough
    const price = product.basePrice;
    if (product.discountPrice !== "") {
      return (
        <Text color="blue.600" fontSize="md" as="s">
          {price}
        </Text>
      );
    } else {
      return (
        <Text color="blue.600" fontSize="md" as="b">
          {price}
        </Text>
      );
    }
  };

  const handleClick = (product) => {
    //When a card is clicked user gets redirected to its detail page
    localStorage.setItem("endpoint", "summer");
    localStorage.setItem("productLink", product.productLink);
    navigate("/product-desc");
  };

  const changeVisible = () => {
    setVisible((prevValue) => prevValue + 30); //when load more button triggered, next 30 values are mapped
  };

  return (
    <div id="list">
      {products &&
        products.slice(0, visible).map((product) => {
          //data is mapped after being sliced from 0 to 30
          return (
            <Card id="card" onClick={() => handleClick(product)}>
              <CardBody>
                <Image src={product.productImage} borderRadius="lg" />
                <Text size="lg">{product.productTitle}</Text>
                <Text>
                  {priceHandle(product)}{" "}
                  <Text color="#A1001A" fontSize="md" as="b">
                    {product.discountPrice}
                  </Text>
                </Text>
              </CardBody>
            </Card>
          );
        })}
      <Button
        id="loadbtn"
        colorScheme="purple"
        onClick={changeVisible}
        display={{ base: "none", md: "flex" }}
      >
        Load More
      </Button>{" "}
      <IconButton
        id="loadbtn"
        colorScheme="purple"
        onClick={changeVisible}
        display={{ base: "flex", md: "none" }}
      >
        <RepeatIcon />
      </IconButton>{" "}
      {/*Load More items button*/}
    </div>
  );
}

export default ProductBody;
