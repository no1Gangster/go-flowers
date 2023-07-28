import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const total = localStorage.getItem("total");
  const payStatus = localStorage.getItem("payment");
  console.log(payStatus);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userID");
  const [buyItems, setBuyItems] = useState([]);
  const [idList, setIdList] = useState([]);

  useEffect(() => {
    if (payStatus === null) navigate("/cart");
  }, []);

  const getCartItem = async () => {
    const res = await fetch(`http://localhost:5005/cart`, {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
    const filteredData = data.filter((product) => product.userID === userId);

    console.log(filteredData);
    setBuyItems(filteredData);

    try {
      for (const data of filteredData) {
        const did = data.id;
        delete data.id;
        const res = await fetch(`http://localhost:5005/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        data.id = did;

        if (!res.ok) {
          throw new Error("Failed to post data to the API.");
        }
        const resData = await res.json();
        console.log(resData);

        // Delete the item from the cart after it has been successfully posted
        const deleteRes = await fetch(`http://localhost:5005/cart/${data.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!deleteRes.ok) {
          throw new Error(`Failed to delete data for id: ${data.id}`);
        }
      }
      localStorage.removeItem("payment");
      localStorage.removeItem("total");
    } catch (error) {
      console.log(error);
    }
  };

  const payChoice = async (choice) => {
    if (choice === true) {
      await getCartItem();
      await navigate("/orders");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4300/4300059.png"
          width="3%"
        />
      </div>
      <div>
        <h2>Go Flowers</h2>
      </div>
      <div>
        <h3>Total Amount</h3>
      </div>
      <div>
        <h1>${total}</h1>
      </div>
      <div>
        Phone Number:
        <input type="number" />
      </div>
      <div>
        <button onClick={() => payChoice(true)}>Approve</button>
        <button onClick={() => payChoice(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default Payment;
