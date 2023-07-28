import React, { useEffect, useState } from "react";
import PriceCard from "./priceCard";
import { useNavigate } from "react-router-dom";
import "./productDesc.css";
import {
  Flex,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

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

  const addToCart = (item) => {
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

    localStorage.setItem("userID", "Sample@mail");

    fetch("http://localhost:5005/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/cart");
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div id="parent_container">
            <div
              style={{
                display: "grid",
                width: "30%",
              }}
            >
              <div>
                <img src={item.productImage} />
              </div>
              <div
                id="random_text"
                style={{
                  marginTop: "6%",
                  padding: "4%",
                  fontWeight: "hairline",
                  textAlign: "center",
                }}
              >
                <h5>
                  Our local florists put love into every arrangement. Sometimes
                  they have to substitute flower types, colors & containers to
                  give you the freshest blooms available. Although your bouquet
                  may vary from the photo shown, we promise your recipient will
                  love it just as much!
                </h5>
              </div>
              <div>
                <Image src="" />
              </div>
            </div>

            <div id="right_content">
              <div id="pricecard_content">
                <PriceCard
                  title={item.productTitle}
                  basePrice={item.basePrice}
                  discountPrice={item.discountPrice}
                />
                <button id="add" onClick={addToCart}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Flex flexDirection="column" m="1%">
        <Accordion allowMultiple m="1%">
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      textColor="purple"
                      fontWeight="bold"
                      fontSize="lg"
                      padding="1%"
                      id="acc_btn"
                    >
                      Summer Flower Arrangement
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} allowMultiple textAlign="start" m="2%">
                  <Box>
                    <Heading fontSize="sm" bg="lightgray" padding="1%">
                      The Best Summer Flower Arrangement & Bouquet Ideas
                    </Heading>
                    <Text>
                      This summer send loved ones a vibrant summer flower
                      arrangement to brighten up their home and add a bit of
                      summertime indoors! Flowers that represent summer include
                      sunflowers, daisies, peonies, lilies, roses, and lavender.
                      Choose a summer flower bouquet with an assortment of
                      flowers, or create your own unique summer arrangement!
                      Some popular Summer flower arrangement ideas include:
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        <Link>Sunflower</Link>Such as Fields of Europe® Summer
                        and Summer Sunshine Bouquet as sunflowers are a staple
                        of the warmer months and are sure to brighten up any
                        space!
                      </ListItem>
                      <ListItem>
                        Daisy Bouquets: Daisies are great flowers that capture
                        the essence of summer! Some popular summer arrangements
                        featuring daises include the Summer Dunes™ bouquet and
                        the Garden Pathway™ bouquet!
                      </ListItem>
                      <ListItem>
                        Rose Bouquets: In festive summer colors such as pinks,
                        whites and purples such as a bouquet of Sorbet Roses or
                        Magnificent Roses® Preserved Citrus Roses!
                      </ListItem>
                      <ListItem>
                        Lily Bouquets: Lilies are gorgeous flowers perfect to
                        send to summer spirit to loved ones near or far! Some
                        popular lily bouquets for summer include Summer Lilies
                        with Ross-Simons Bee Necklace and the Vibrant Summer
                        Lily Bouquet!
                      </ListItem>
                      <ListItem>
                        Mixed Flower Arrangements: Want to send them a mix of
                        different summer florals? Mixed flower arrangements are
                        the perfect option! Popular options for summer include
                        the Citrus Sunshine™ Bouquet which features yellow and
                        orange roses, yellow lilies and orange mini carnations
                        as well as the Sunny Garden Basket™ which features pink
                        roses, carnations, sunflowers and mums all arranged in a
                        decorative basket!
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  <Box>
                    <Heading fontSize="sm" bg="lightgray" padding="1%">
                      Summer Gift Delivery
                    </Heading>
                    <Text>
                      Bask in the glory of summer and create unforgettable
                      memories by sending summer gifts right to the doorsteps of
                      your family and friends to share the joy of the season.
                      Schedule a summer flower delivery to reach your loved ones
                      at any time you desire no matter where they live with our
                      convenient summer gift delivery options.
                    </Text>
                  </Box>

                  <Box>
                    <Heading fontSize="sm" bg="lightgray" padding="1%">
                      Summer Gift Baskets
                    </Heading>
                    <Text>
                      Make your summer gift basket ideas come to life with our
                      vast collection of summer gift baskets that has something
                      for everyone to celebrate the sunshine and warmer months!
                      Our summer themed gift baskets will put you right in the
                      mood for the season of sunshine. Send a summer fun gift
                      basket to all your friends and family today to share the
                      delight of the summertime with them.
                    </Text>
                  </Box>

                  <Box>
                    <Heading fontSize="sm" bg="lightgray" padding="1%">
                      Top 10 Summer Flower Arrangements & Centerpieces
                    </Heading>
                    <UnorderedList>
                      <ListItem>
                        <Link>Fields of Europe Summer</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Summer Dunes</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Sorbet Roses</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Coastal Breeze</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Vibrant Summer Lily Bouquet</Link>
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Flex>
    </div>
  );
}

export default ProductDesc;
