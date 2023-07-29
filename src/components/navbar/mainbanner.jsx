import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MainBanner() {
  return (
    <Box>
      {" "}
      <Flex>
        {" "}
        <Box w="100%">
          <Box
            bg="#F4ECFF"
            h="5vh"
            color="purple"
            fontWeight="bold"
            alignContent="center"
          >
            <Text textAlign="center">
              PASSPORT MEMBER : 25% OFF + FREE SHIPPING | GET THE DEAL!
            </Text>
          </Box>
          <Box bg="lavender">
            <Flex>
              {" "}
              <Image
                display={{ base: "none", md: "flex" }}
                src="https://reviewed-com-res.cloudinary.com/image/fetch/s--muADjTX_--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_729,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1581355762219/1-800-flowers.jpg"
                alt="banner"
                w="50%"
              />
              <Box mt="11%" display={{ base: "none", md: "flex" }}>
                <VStack>
                  <Text fontWeight="extrabold">MAKE EVERY</Text>
                  <Heading fontWeight="bold">BIRTHDAY SPECIAL</Heading>
                  <Text as="h5" textAlign="centre" p="2%">
                    We love birthdays like we love flowers.Find everything from
                    party favors to personalized gifts right here{" "}
                  </Text>
                  <Button colorScheme="purple">
                    <Link to="/summer">SHOP NOW</Link>
                  </Button>
                </VStack>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default MainBanner;
