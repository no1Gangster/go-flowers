import React from "react";
import QuickLinks from "./quickLinks";
import ProductBody from "./productBody";
import "./productPage.css";
import {
  Heading,
  Text,
  Center,
  Accordion,
  AccordionButton,
  AccordionPanel,
  Box,
  ListItem,
  UnorderedList,
  AccordionItem,
  Flex,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Topbar from "../components/topbar/topbar";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
function ProductPage() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div id="container_left">
        <div>
          <QuickLinks id="qlinks" />
        </div>
        <div>
          <ProductBody />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
