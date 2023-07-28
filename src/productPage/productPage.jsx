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
function ProductPage() {
  return (
    <div id="container_left">
      <QuickLinks id="qlinks" />
      <ProductBody />
      <Topbar />
    </div>
  );
}

export default ProductPage;
