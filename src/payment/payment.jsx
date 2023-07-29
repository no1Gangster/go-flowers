import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";
import { Card, Image } from "@chakra-ui/react";
import Topbar from "../components/topbar/topbar";

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
    <div id="grandparent_div">
      {/* <Topbar /> */}
      <video
        autoPlay
        loop
        src="https://player.vimeo.com/external/191382067.sd.mp4?s=2fd8787c791ff985a786109f9b6dbd92baf397b6&profile_id=164&oauth2_token_id=57447761"
        // style={{ width: "100%", height: "auto" }}
      />
      <div
        id="parent_div"
        minHeight="100vh" // Set a minimum height to take the full height of the viewport
        padding="0 10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <div id="content" width={{ base: "90%", md: "50%" }}>
          <div id="img_div">
            <img
              id="image"
              src="https://cdn-icons-png.flaticon.com/512/4300/4300059.png"
              width="3%"
            />
          </div>
          <div id="org_div">
            <h2>Go Flowers</h2>
          </div>
          <div id="total_div">
            <h3 id="amt">Total Amount:</h3>
            <h1 id="price" style={{ fontWeight: "bold" }}>
              ${total}
            </h1>
            <label as="h3" style={{ color: "white", fontWeight: "hairline" }}>
              Phone Number:
            </label>
            <input
              id="phone_input"
              type="number"
              width={{ base: "90%", md: "50%" }}
            />
          </div>
          <div id="btns_div">
            <Button onClick={() => payChoice(true)} colorScheme="purple">
              Approve
            </Button>
            <Button onClick={() => payChoice(false)} colorScheme="purple">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
