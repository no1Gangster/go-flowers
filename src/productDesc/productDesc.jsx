import React, { useEffect, useState } from "react";
import PriceCard from "./priceCard";

function ProductDesc () {
    const endpoint = localStorage.getItem("endpoint");
    const link = localStorage.getItem("productLink");
    const [items,setItems] = useState([]);
    const [cartItem , setCartItem] = useState({});


    const getData = async () => {
        try {
            const res = await fetch(`http://localhost:5005/${endpoint}`);
            const data = await res.json();
            const filteredData = data.filter(product => product.productLink === link);
            setItems(filteredData);
            setCartItem(filteredData[0]);
            console.log(filteredData);
          } catch (error) {
            console.error(error);
          }
    };

    useEffect(() => {
        getData();
    },[]);

    const addToCart = (item) => {

        {setCartItem(item)};

        const data = {
            userID : "Sample@mail",
            productLink : cartItem.productLink,
            productImage : cartItem.productImage,
            productTitle : cartItem.productTitle,
            basePrice : cartItem.basePrice,
            discountPrice : cartItem.discountPrice,
            size: localStorage.getItem("size"),
        };

        console.log(data);

        fetch('http://localhost:5005/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return(
        <div>
            {items.map(item =>{
                return(
                    <div>
                        <div>
                            <img src={item.productImage} />
                        </div>
                        <div>
                            <PriceCard title = {item.productTitle}  
                            basePrice = {item.basePrice}
                            discountPrice = {item.discountPrice} />
                        </div>
                    </div>
                )})}
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductDesc;