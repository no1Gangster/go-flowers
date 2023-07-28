import React, { useEffect, useState } from "react";
import OrdersCard from "./ordersCard";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

function Orders() {
  const userId = localStorage.getItem("userID");
  const [orderItems, setOrderItems] = useState([]);
  const [chekoutPrice, setCheckoutPrice] = useState(0);

  const getData = async () => {
    try {
      const res = await fetch(`http://localhost:5005/orders`, {
        method: "GET",
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
      {orderItems.length === 0 ? (
        <div>You haven't ordered anything.</div>
      ) : (
        <div>
          {orderItems.map((item) => (
            <div key={item.id}>
              <OrdersCard
                imgSrc={item.productImage}
                productTitle={item.productTitle}
                basePrice={item.basePrice}
                discountPrice={item.discountPrice}
                productLink={item.productLink}
              />
            </div>
          ))}
          <div>
            <p>Total: ${chekoutPrice}</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Orders;
