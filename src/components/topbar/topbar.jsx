import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
function Topbar() {
  return (
    <Box>
      {" "}
      <Box bg="purple" p="0.1%">
        <Text textAlign="center" textColor="white">
          PASSPORT MEMBER : 25% OFF + FREE SHIPPING | GET THE DEAL!
        </Text>
      </Box>
      <Box p="1%">
        <Flex>
          <Box m="auto" w="40%">
            <Heading fontWeight="extrabold" fontSize="medium" color="purple">
              Summer Flower Arrangements & Gifts
            </Heading>
          </Box>
          {/* <Divider orientation="vertical" height="20vh" color="red" /> */}
          <Box ml="10%">
            <Flex flexDirection="column">
              <Text fontSize="sm" fontWeight="bold">
                Summer of Smiles®
              </Text>
              <Text fontSize="x-small">
                It’s the season to celebrate, and we have more ways than ever to
                send a smile! From colorful summer flower arrangements, bouquets
                & summer wreaths to blooming summer plants & fun summer gifts
                for delivery, trust us to help you celebrate the season!
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>{" "}
    </Box>
  );
}
export default Topbar;
