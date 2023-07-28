import React, { useEffect } from "react";
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RadioGroup, Radio, Stack } from "@chakra-ui/react";

function PriceCard({ title, basePrice, discountPrice }) {
  var dispPrice = {};
  const [value, setValue] = useState("Small");

  if (discountPrice !== "") {
    dispPrice = (
      <Text color="blue.600" fontSize="md" as="s">
        {basePrice}
      </Text>
    );
  } else {
    dispPrice = (
      <Text color="blue.600" fontSize="2xl" as="b">
        {basePrice}
      </Text>
    );
  }

  useEffect(() => {
    localStorage.setItem("size", value);
  }, [value]);

  return (
    <Box id="container" maxWidth={{ base: "50%", md: "30%", sm: "10%" }}>
      <div id="heading">
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "large",
            width: "200%",
            fontFamily: "monospace",
          }}
        >
          {title}
        </h1>
      </div>

      <div id="sizeOption">
        <ChakraProvider>
          <Box p={4}>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction={"column"}>
                <Radio value="Small">Small</Radio>
                <Radio value="Medium">Medium</Radio>
                <Radio value="Large">Large</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </ChakraProvider>
      </div>
      <img
        width={"90%"}
        src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?auto=webp&optimize={medium}"
        id="payment"
      />
      <div id="price">
        <Text color="blue.600" fontSize="2xl" as="b">
          {discountPrice}
        </Text>{" "}
        {dispPrice}
      </div>
    </Box>
  );
}

export default PriceCard;
