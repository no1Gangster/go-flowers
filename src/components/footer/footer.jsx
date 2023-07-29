import React from "react";
import {
  Flex,
  Box,
  Text,
  Link,
  IconButton,
  Button,
  Image,
  Heading,
  Icon,
  Input,
  Divider,
  Center,
  // Button,
} from "@chakra-ui/react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import { BiHeading, BiLogoMailchimp } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <Box
      bg="#880ED4"
      textAlign="start"
      p="2%"
      fontSize="sm"
      mt="5%"
      // fontColor="white"
      // fontFamily="LatoMedium,sans-serif"
    >
      <Flex display={{ base: "none", md: "flex" }} textColor="white">
        <Box w="30%">
          <Text fontWeight="extrabold">MORE WAYS TO SHOP</Text>
          <Flex flexDirection="column">
            <Link>FLower Delivery Same-Day</Link>
            <Link>Flower Arrangements</Link>
            <Link>Sympathy Flowers & Gifts</Link>
            <Link>Roses</Link>
            <Link>Birthday Flowers & Gifts</Link>
            <Link>Flowers Subscription</Link>
            <Link>Plants</Link>
            <Link>Gift Baskets & Food</Link>
            <Link>International Flower Delivery</Link>
            <Link>Find a Local Florist</Link>
            <Link>Corporate Gifts</Link>
            <Link>Chocolate Covered Strawberries</Link>
            <Link>Marketplace Sellers</Link>
            <Link>Sitemap</Link>
          </Flex>
        </Box>

        <Box w="30%">
          <Flex flexDirection="column">
            <Flex flexDirection="column">
              <Text fontWeight="extrabold">CUSTOMER SERVICE</Text>
              <Link>Customer Service</Link>
              <Link>COVID_19 Updates</Link>
              <Link>eGift Cards</Link>
              <Link>Contact Us</Link>
              <Link>Allergy warning</Link>
              <Link>Funeral Advisors</Link>
              <Link>Smile Guarantee</Link>
            </Flex>
            <Flex flexDirection="column">
              <Text fontWeight="extrabold">VETERANS ADVANTAGE</Text>
              <Link>Get Exclusive Military</Link>
              <Link>Discounts Everyday</Link>
            </Flex>
          </Flex>
        </Box>

        <Box w="30%">
          <Flex flexDirection="column">
            <Flex flexDirection="column">
              <Text fontWeight="extrabold">OUR STORES</Text>
              <Link>Store Locator</Link>
              <Link>Franchise Opportunities</Link>
              <Link>Local DIY Events</Link>
            </Flex>
            <Flex flexDirection="column">
              <Text fontWeight="extrabold">ACCOUNT LOGIN</Text>
              <Link>Sign In to Your Account</Link>
            </Flex>
          </Flex>
        </Box>

        <Box w="30%">
          <Flex flexDirection="column">
            <Flex flexDirection="column">
              <Text fontWeight="extrabold">CORPORATE</Text>
              <Link>About Us</Link>
              <Link>Our Brands</Link>
              <Link>Social Responsility</Link>
              <Link>Careers</Link>
              <Link>News & Media</Link>
              <Link>Investors</Link>
            </Flex>
            <Box>
              <Text fontWeight="extrabold">AFFILIATE</Text>
              <Link>Become an Affiliate</Link>
            </Box>
            <Flex flexDirection="column">
              <Text fontWeight="extrabold">OUR BLOG</Text>
              <Link>Petal Talk Blog</Link>
              <Link>Julie's Corner</Link>
              <Link>Jim's Corner</Link>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Text fontWeight="extrabold">FOLLOW US</Text>
          <Flex>
            {" "}
            <IconButton colorScheme="transparent" color="black " size="md">
              <AiFillInstagram />
            </IconButton>
            <IconButton colorScheme="transparent" color="black" size="md">
              <AiOutlineTwitter />
            </IconButton>
            <IconButton colorScheme="transparent" color="black" size="md">
              <AiFillYoutube />
            </IconButton>
            <IconButton colorScheme="transparent" color="black" size="md">
              <FaPinterestSquare />
            </IconButton>
            <IconButton colorScheme="transparent" color="black" size="md">
              <AiFillFacebook />
            </IconButton>
          </Flex>
        </Box>
      </Flex>

      <Flex
        flexDirection="row"
        bg="white"
        display={{ base: "Flex", md: "none" }}
      >
        <Box m="5%">
          <Flex textAlign="center" textColor="black">
            <Box>
              <Flex justifyContent="center">
                {" "}
                <BiLogoMailchimp color="black" w="100%" />
                <Text color="purple">Unlock Exclusive Offers</Text>
              </Flex>
              <Flex>
                <Input placeholder="Your Email Address"></Input>
                <Button textColor="white" bg="purple">
                  Submit
                </Button>
              </Flex>
            </Box>
          </Flex>

          <Box fontColor="black">
            <Heading fontWeight="hairline">Have Questions?</Heading>
            <Text fontColor="black">We'll help you find answers</Text>
            <Button>
              <BsTelephoneFill />
              Call Us
            </Button>

            <Box w="100%" m="auto" textColor="purple" p="4%" textAlign="cente">
              <Flex gap="5px" flexDirection="column">
                <Link>SITEMAP</Link>
                <Link>HELP</Link>
                <Link>FAQ</Link>
                <Link>TRACK MY ORDER</Link>
                <Link>ALLERGY WARNING</Link>
                <Link>STORE LOCATOR</Link>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box
        w="100%"
        p="1%"
        ml="2%"
        fontSize="xs"
        display={{ base: "none", md: "flex" }}
      >
        <Flex fontWeight="bold" justifyContent="center">
          <Link m="0% 1% 0% 1%">
            <Text textColor="white">Privacy Notice</Text>
          </Link>
          <Center height="30px">
            <Divider orientation="vertical" p="3%" />
          </Center>
          <Link m="0% 1% 0% 1%">
            <Text textColor="white"> Terms of Use</Text>
          </Link>
          <Center height="30px">
            <Divider orientation="vertical" />
          </Center>
          <Link m="0% 1% 0% 1%">
            <Text textColor="white"> Accessibility Statement</Text>
          </Link>
          <Center height="30px">
            <Divider orientation="vertical" />
          </Center>
          <Link m="0% 1% 0% 1%">
            <Text textColor="white">
              {" "}
              Don't Sell or Share My Personal Information
            </Text>
          </Link>
          <Center height="30px">
            <Divider orientation="vertical" />
          </Center>
          <Link m="0% 1% 0% 1%">
            <Text textColor="white"> Site Map</Text>
          </Link>
          <Text textColor="white">
            © Copyrights 2023 go-flowers.com,Inc.-Church Road,DEL
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
export default Footer;
