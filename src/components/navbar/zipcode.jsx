import {
  Box,
  Button,
  Flex,
  Select,
  Input,
  Text,
  HStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";

function ZipInput() {
  return (
    <Box w="80%" ml="15%" display={{ base: "none", md: "flex" }}>
      <Flex bg="lavender" p="2%" justifyContent="space-around">
        <HStack>
          {" "}
          <Box>
            <Heading color="purple" size="md">
              {" "}
              FIND THE PERFECT GIFT
            </Heading>
          </Box>
          <Box>
            <Text textAlign="start" color="purple">
              Where is it going?
            </Text>
            <Input
              placeholder="Delivery Zip Code"
              size="sm"
              type="number"
              bg="white"
            />
          </Box>
          <Box>
            <Text textAlign="start" color="purple">
              Occasion
            </Text>
            <Select placeholder="Birthday" size="sm" bg="white">
              <option value="option1">Birthday</option>
              <option value="option2">Anniversary</option>
              <option value="option3">Get well soon</option>
              <option value="option3">I'm Sorry</option>
              <option value="option3">Congratulations</option>
              <option value="option3">Flowers and gifts</option>
            </Select>
          </Box>
          <Box>
            <Button colorScheme="purple">FIND A GIFT NOW</Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default ZipInput;
