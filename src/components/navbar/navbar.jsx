import React from "react";
import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Divider,
  Text,
  Button,
  Image,
  textDecoration,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Input,
  Icon,
  HStack,
  IconButton,
  Portal,
  VStack,
  UnorderedList,
  ListItem,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  CheckIcon,
  ReactIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaTruck } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";

const signinbtn = () => {};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePopoverMouseEnter = () => {
    onOpen();
  };

  const handlePopoverMouseLeave = () => {
    onClose();
  };

  const [activeTab, setActiveTab] = useState(null);

  const handleTabMouseEnter = (index) => {
    setActiveTab(index);
  };

  const handleTabMouseLeave = () => {
    setActiveTab(null);
  };

  const breakpoint = "768px";

  // const handleTabMouseLeave = () => {
  //   if (activeTab === null) {
  //     setActiveTab(-1);
  //   }
  // };

  const tabData = [
    {
      label: "SUMMERS",
      content: (
        <Box>
          <Flex gap="40px">
            <Box w="25%">
              <Text fontWeight="semibold" as="h1" textAlign="start">
                Summer
              </Text>
              <Flex flexDirection="column" textAlign="start">
                {" "}
                <Link color="black" colorScheme="transparent">
                  All Summers
                </Link>
                <Link color="black" colorScheme="transparent">
                  Barbie
                </Link>
                <Link color="black" colorScheme="transparent">
                  New Arrivals
                </Link>
                <Link color="black" colorScheme="transparent">
                  Gift Bundles
                </Link>
                <Link color="black" colorScheme="transparent">
                  Passport to Summer Fun: Save 25%
                </Link>
                <Link color="black" colorScheme="transparent">
                  Christmas in July: Save Up to 30%
                </Link>
                <Link color="black" colorScheme="transparent">
                  Ranunculus
                </Link>
              </Flex>
            </Box>

            <Box w="25%">
              <Text fontWeight="semibold" as="h1" textAlign="start">
                Shop by Gourmet Food & Treats
              </Text>
              <Flex flexDirection="column" textAlign="start">
                {" "}
                <Link color="black" colorScheme="transparent">
                  BBQ & Grilling Gifts
                </Link>
                <Link color="black" colorScheme="transparent">
                  Chocolate covered strawberries
                </Link>
                <Link color="black" colorScheme="transparent">
                  Fruit Basket
                </Link>
                <Link color="black" colorScheme="transparent">
                  Meat & Cheese
                </Link>
                <Link color="black" colorScheme="transparent">
                  Wine Gifts
                </Link>
                <Link color="black" colorScheme="transparent">
                  Prepared Meal Delivery
                </Link>
              </Flex>
            </Box>

            <Box w="25%">
              <Text fontWeight="semibold" as="h1" textAlign="start">
                Shop by Gifts & More
              </Text>
              <Flex flexDirection="column" textAlign="start">
                {" "}
                <Link color="black" colorScheme="transparent">
                  Keepsake Gifts
                </Link>
                <Link color="black" colorScheme="transparent">
                  Personlized Gifts
                </Link>
                <Link color="black" colorScheme="transparent">
                  Gift sets
                </Link>
                <Link color="black" colorScheme="transparent">
                  Barware
                </Link>
                <Link color="black" colorScheme="transparent">
                  Garden Decor
                </Link>
                <Link color="black" colorScheme="transparent">
                  Outdoor Living
                </Link>
                <Link color="black" colorScheme="transparent">
                  Beach Towels
                </Link>
                <Link color="black" colorScheme="transparent">
                  Fishing & Hunting
                </Link>
                <Link color="black" colorScheme="transparent">
                  Golf Accessories
                </Link>
              </Flex>
            </Box>

            <Box w="25%" mt="4%">
              <Stack direction="column" spacing={2}>
                <Image
                  src="https://impalarollerskates.com/cdn/shop/files/INSTA_SOCIAL_ASSETS_JULY_PUSH_Image1_1080x1080_1_1500x.jpg?v=1689356862"
                  w="60%"
                />
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="transparent"
                  // variant="outline"
                  w="30%"
                  ml="5%"
                  textColor="DeepPink"
                >
                  Shop Pink!!
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Box>
      ),
    },
    {
      label: "BIRTHDAYS",
      content: (
        <Box>
          <Flex gap="40px">
            <Box w="25%">
              <Text fontWeight="semibold" as="h1" textAlign="start">
                Birthday
              </Text>
              <Flex flexDirection="column" textAlign="start">
                {" "}
                <Link color="black" colorScheme="transparent">
                  Birthday Best Sellers
                </Link>
                <Link color="black" colorScheme="transparent">
                  Birthday Gift Guide
                </Link>
                <Link color="black" colorScheme="transparent">
                  Flower Subscription
                </Link>
                <Link color="black" colorScheme="transparent">
                  Same day delivery
                </Link>
                <Link color="black" colorScheme="transparent">
                  Birthday Flowers
                </Link>
                <Link color="black" colorScheme="transparent">
                  Party supplies
                </Link>
              </Flex>
            </Box>

            <Box w="25%">
              <Text fontWeight="semibold" as="h1" textAlign="start">
                Shop by Recipient
              </Text>
              <Flex flexDirection="column" textAlign="start">
                {" "}
                <Link color="black" colorScheme="transparent">
                  Gifts For Mom
                </Link>
                <Link color="black" colorScheme="transparent">
                  Gists For Her
                </Link>
                <Link color="black" colorScheme="transparent">
                  Gifts For Kids
                </Link>
                <Link color="black" colorScheme="transparent">
                  Gifts For Him
                </Link>
                <Link color="black" colorScheme="transparent">
                  Gifts For Friends
                </Link>
              </Flex>
            </Box>

            <Box w="25%">
              <Text fontWeight="semibold" as="h1" textAlign="start">
                Gifts & More
              </Text>
              <Flex flexDirection="column" textAlign="start">
                {" "}
                <Link color="black" colorScheme="transparent">
                  What's New?
                </Link>
                <Link color="black" colorScheme="transparent">
                  Jewelry
                </Link>
                <Link color="black" colorScheme="transparent">
                  Spa & Aromatherapy
                </Link>
                <Link color="black" colorScheme="transparent">
                  Toy Bears
                </Link>
                <Link color="black" colorScheme="transparent">
                  Tribute|Free group Video
                </Link>
                <Link color="black" colorScheme="transparent">
                  Gift Sets
                </Link>
                <Link color="black" colorScheme="transparent">
                  Gifts Under $30
                </Link>
                <Link color="black" colorScheme="transparent">
                  Gifts Under $50
                </Link>
                <Link color="black" colorScheme="transparent">
                  Personalized Gifts
                </Link>
              </Flex>
            </Box>

            <Box w="25%" mt="4%">
              <Stack direction="column" spacing={2}>
                <Image
                  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?auto=webp&optimize={medium}"
                  w="60%"
                />
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="transparent"
                  // variant="outline"
                  w="30%"
                  ml="20%"
                  textColor="DeepPink"
                >
                  Birthday Flowers Subscriptions
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Box>
      ),
    },
    {
      label: " SYMPATHY",
      content: (
        <div>
          {" "}
          <Text>hello</Text>
        </div>
      ),
    },
    {
      label: "OCCASIONS",
      content: (
        <div>
          {" "}
          <Text>hello</Text>
        </div>
      ),
    },
    {
      label: "FLOWERS",
      content: (
        <div>
          {" "}
          <Text>hello</Text>
        </div>
      ),
    },
    {
      label: " PLANTS",
      content: (
        <div>
          {" "}
          <Text>hello</Text>
        </div>
      ),
    },
    {
      label: "GIFT BASKET & FOOD",
      content: (
        <div>
          {" "}
          <Text>hello</Text>
        </div>
      ),
    },
    {
      label: " GIFTS & MORE",
      content: (
        <div>
          {" "}
          <Text>hello</Text>
        </div>
      ),
    },
    {
      label: "SAME-DAY DELIVERY",
      content: (
        <div>
          {" "}
          <Text>hello</Text>
        </div>
      ),
    },
    {
      label: " SALE",
      content: (
        <div>
          {" "}
          <Text>hello</Text>
        </div>
      ),
    },
    {
      label: " COMMUNITY",
      content: (
        <div>
          {" "}
          <Text>hello</Text>
        </div>
      ),
    },
  ];

  return (
    <div className="nav_top">
      <Divider orientation="horizontal" color="gray.500" />
      <Flex>
        <Box>
          <Flex>
            <Box display={{ base: "none", md: "flex" }}>
              <Image
                src="https://images-platform.99static.com//yrVX8ufudrS38A20MkM0ADXc6eA=/0x0:1904x1904/fit-in/500x500/99designs-contests-attachments/87/87532/attachment_87532959"
                alt="logo"
                width="20%"
              />
            </Box>
            <Box w="70%" m="auto">
              <Flex>
                <Input placeholder="Enter Keyword or Product Number"></Input>
                <Button colorScheme="purple" w="45%">
                  Search
                </Button>
              </Flex>
            </Box>

            <Box m="2% 5%">
              <HStack gap="50px" ml="85%">
                <Popover isOpen={isOpen} onClose={onClose}>
                  <PopoverTrigger>
                    <IconButton
                      isRound={true}
                      variant="solid"
                      _hover={{ bg: "transparent" }}
                      onMouseEnter={handlePopoverMouseEnter}
                      aria-label="Done"
                      fontSize="20px"
                      icon={<CgProfile />}
                      onClick={signinbtn}
                    />
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent onMouseLeave={handlePopoverMouseLeave}>
                      <PopoverArrow />
                      <PopoverHeader m="auto">
                        {" "}
                        <Button colorScheme="purple" w="100%">
                          SIGN IN
                        </Button>
                      </PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Text fontWeight="bold" ml="20%">
                          Don't have an account?
                        </Text>
                        <Link color="purple" ml="35%">
                          Click Here
                        </Link>
                        <Flex
                          fontSize="xs"
                          textAlign="start"
                          flexDirection="column"
                        >
                          <Link>Your Account</Link>
                          <Link>Track Your Orders</Link>
                          <Link>Join Celebrations Passport</Link>
                        </Flex>
                      </PopoverBody>
                      <PopoverFooter>
                        <Box
                          border="2px solid darkgray"
                          m="auto"
                          p="2.5%"
                          borderRadius="5px"
                        >
                          <Text fontWeight="semibold">
                            Benifits of Registration
                          </Text>
                          <UnorderedList fontSize="xs" fontWeight="semibold">
                            <ListItem>Fast,Secure Checkout</ListItem>
                            <ListItem>Exclusive Promtions and Offer</ListItem>
                          </UnorderedList>
                        </Box>
                      </PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>

                <IconButton
                  isRound={true}
                  variant="solid"
                  // colorScheme="teal"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<FaTruck />}
                ></IconButton>

                <IconButton
                  isRound={true}
                  variant="solid"
                  // colorScheme="teal"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<AiOutlineShoppingCart />}
                ></IconButton>
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex>
        <Box display={{ base: "none", md: "block" }}>
          <Divider orientation="horizontal" borderColor="black" />
          <Tabs
            position="relative"
            variant="unstyled"
            onMouseLeave={handleTabMouseLeave}
          >
            <TabList>
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  fontSize="xs"
                  onMouseEnter={() => handleTabMouseEnter(index)}
                  // onMouseLeave={handleTabMouseLeave}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
            <Divider orientation="horizontal" borderColor="black" />
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
              style={{
                display: activeTab !== -1 ? "block" : "none",
              }}
            />
            <TabPanels>
              {tabData.map((tab, index) => (
                <TabPanel
                  key={index}
                  bg="white"
                  justifyContent="space-around"
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                >
                  {activeTab === index && tab.content}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>

        <Box display={{ base: "bLock", md: "flex" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              display={{ base: "block", md: "none" }}
            />
            <MenuList>
              <MenuItem>
                <Link>Summers</Link>
              </MenuItem>
              <MenuItem>
                <Link>Birthday</Link>
              </MenuItem>
              <MenuItem>
                <Link>Sympathy</Link>
              </MenuItem>
              <MenuItem>
                <Link>Flowers</Link>
              </MenuItem>
              <MenuItem>
                <Link>Plants</Link>
              </MenuItem>
              <MenuItem>
                <Link>Gift Baskets & Food</Link>
              </MenuItem>
              <MenuItem>
                <Link>Gifts and more</Link>
              </MenuItem>
              <MenuItem>
                <Link>Same Day Delivery</Link>
              </MenuItem>
              <MenuItem>
                <Link>Sale</Link>
              </MenuItem>
              <MenuItem>
                <Link>Join Us</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </div>
  );
};
export default Navbar;
