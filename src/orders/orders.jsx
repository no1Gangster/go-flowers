import React, { useEffect, useState } from "react";
import OrdersCard from "./ordersCard";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Box, Heading } from "@chakra-ui/react";
import ".//order.css";

function Orders() {
  const userId = localStorage.getItem("userID");
  const [orderItems, setOrderItems] = useState([]);
  const [chekoutPrice, setCheckoutPrice] = useState(0);
  const token = JSON.parse(localStorage.getItem("token"));

  const getData = async () => {
    try {
      const res = await fetch(`http://localhost:5005/orders`, {
        method: "GET",
        Authorization: token,
      });
      const data = await res.json();
      const filteredData = data.filter((product) => product.userID === userId);
      setOrderItems(filteredData);
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

  const totalPrice = (acc, basePrice, discountPrice) => {
    console.log("acc", acc);
    if (discountPrice.length !== 0) {
      return acc + parseFloat(discountPrice.slice(1, 5));
    } else {
      return acc + parseFloat(basePrice.slice(1, 5));
    }
  };

  return (
    <div>
      <Navbar />
      <Box>
        <Heading textColor="white" bg="purple" textAlign="center" p="1%">
          My Orders
        </Heading>
      </Box>
      {orderItems.length === 0 ? (
        <div>You haven't ordered anything.</div>
      ) : (
        <Box>
          <Box id="body_div">
            {orderItems.map((item) => (
              <div key={item.id} id="cardbody_div">
                <OrdersCard
                  imgSrc={item.productImage}
                  productTitle={item.productTitle}
                  basePrice={item.basePrice}
                  discountPrice={item.discountPrice}
                  productLink={item.productLink}
                />
              </div>
            ))}
          </Box>
          <div id="total_price">
            <p textColor="blue">Total: ${chekoutPrice}</p>
          </div>
        </Box>
      )}
      <Footer />
    </div>
  );
}

export default Orders;
