import React from "react";
import ZipInput from "../../components/navbar/zipcode";
import MainBanner from "../../components/navbar/mainbanner";
import MyAccordion from "../../components/accordian/accordian";
import Footer from "../../components/footer/footer";
import Review from "../../components/review/review";
import { Flex, Heading } from "@chakra-ui/react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Navbar from "../../components/navbar/navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <MainBanner />
      <ZipInput />

      <div>
        <div>
          <Box mt="2%">
            <Heading textAlign="center" fontWeight="hairline">
              Send Flowers & Exclusive Gifts
            </Heading>
          </Box>
          <Box m="3%">
            <Flex>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt67299f442812b302/648c9afed5b9a5624f6dd59a/flower-delivery-same-day-silo-191119xl-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Same-Day Delivery</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta2748b9a4b476529/63d304315ba46f75ddba03cf/sympathy-flowers-silo-191166XL-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Sympathy</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltfc8d6ce278824233/648c9f9bd242041f971cc804/chocolate-covered-strawberries-silo-192949-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text textAlign="center">Chocolate Covered Strawberries</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt26149ee749ecd0f3/62b5c27fa7c4490fd2ef03ef/magnificent-preserved-roses-silo-156623-260x284.jpeg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Love & Romance</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltfd80cf0e772c0e66/645d56279c40aa29760741ff/lovely-lavender-medley-silo-191173-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Get well</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltab1e454c31591a41/648c9b12e66699a1042eab32/just-because-flowers-silo-191387l-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Just Because</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>

        <Box m="3%">
          <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltcbe8f422262d80cc/64b9387a58c6c4640d862cf2/barbie-imoc-dt-fy24.jpg?quality=70&auto=webp&optimize={medium}%22" />
        </Box>

        <div>
          {" "}
          <Box>
            <Heading textAlign="center" fontWeight="hairline">
              Sweet & Savoury Summer Surprises
            </Heading>
          </Box>
          <Box m="3%">
            <Flex>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt649c09a594c6ac64/6477b2cef6df4f22dbb51120/bbq-gifts-grilling-accessories-silo-41377-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Gift Baskets</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3a33706289528557/62b4d3e4b8bffb0fb089598a/baked-goods-silo-171491-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Baked Goods</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3c4f45ae5c6c7f96/6259946302d8144fd4dabab4/chocolate-delivery-silo-179909-v3-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Chocolates Gifts</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltde7fc1812ceeddba/649ddea3fcb6fd65095ace10/wine-bar-silo-23132x-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Wine & Bar</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt95b98a90d957b37a/649ddebee9365a1f72c3616e/fruit-baskets-silo-12x-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Fruit Baskets</Text>
                </Flex>
              </Box>
              <Box
                transition="transform 0.1s"
                _hover={{
                  transform: "scale(1.2)",
                  cursor: "pointer",
                }}
              >
                <Flex flexDirection="column" fontWeight="semibold">
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd40ab2939ae7dce1/621faeb43837bf67467a9fbd/meat-and-cheese-silo-32552X-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                  <Text>Meat & Cheese</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>

        <Box m="3%">
          <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta6d133140f6e98cb/64af7eb8873fa3c39303070b/passport_event_banner.jpg?quality=85&auto=webp&optimize={medium}" />
        </Box>
      </div>

      <Box m="5%">
        <Flex gap="3%">
          <Box w="50%">
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7a87d7a61c43367c/649dcf0fa60a7922014124e7/best-selling-flowers-tier-fy24.jpg?quality=60&auto=webp&optimize={medium}" />
            <Box>
              <Text
                fontSize="md"
                bgColor="black"
                textColor="white"
                textAlign="start"
                p="1%"
              >
                Best Sellers
              </Text>
            </Box>
          </Box>
          <Box w="50%">
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta5da45e1c68df66e/649dcf3aa60a7978164124eb/ranunculus-flowers-tier-fy24.jpg?quality=60&auto=webp&optimize={medium}" />
            <Box>
              <Text
                fontSize="md"
                bgColor="black"
                textColor="white"
                textAlign="start"
                p="1%"
              >
                Ranunculus
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box m="3%">
        <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0517dbf989fca39b/6470608faf1a6849e9460784/fy23-marketplace-summer-hero-banner-v2.jpg?quality=85&auto=webp&optimize={medium}" />
      </Box>

      <div>
        <Box>
          <Heading textAlign="center" fontWeight="hairline">
            Explore Our Gifts & More
          </Heading>
        </Box>
        <Box m="3%">
          <Flex>
            <Box
              transition="transform 0.1s"
              _hover={{
                transform: "scale(1.2)",
                cursor: "pointer",
              }}
            >
              <Flex flexDirection="column" fontWeight="semibold">
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc60595753de03456/649ddf65bcdab086263bf9b3/gift-sets-silo-1027-P-MK033464-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                <Text>Gift Sets</Text>
              </Flex>
            </Box>
            <Box
              transition="transform 0.1s"
              _hover={{
                transform: "scale(1.2)",
                cursor: "pointer",
              }}
            >
              <Flex flexDirection="column" fontWeight="semibold">
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc615de5ead49e1c6/62b4d48c59fa7e0f945d7c33/personalized-gifts-silo-1030-P-20645-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                <Text>Personalized Gifts</Text>
              </Flex>
            </Box>
            <Box
              transition="transform 0.1s"
              _hover={{
                transform: "scale(1.2)",
                cursor: "pointer",
              }}
            >
              <Flex flexDirection="column" fontWeight="semibold">
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltcaf3a860f233928c/648c9b91359ef0648860e5ef/preserved-roses-silo-177704-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                <Text textAlign="center">Magnificient Preserved Roses</Text>
              </Flex>
            </Box>
            <Box
              transition="transform 0.1s"
              _hover={{
                transform: "scale(1.2)",
                cursor: "pointer",
              }}
            >
              <Flex flexDirection="column" fontWeight="semibold">
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd3d33d4fcc0493b7/649ddf8924cb3338527f4011/gardening-gifts-silo-196066-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                <Text>Garden Decor</Text>
              </Flex>
            </Box>
            <Box
              transition="transform 0.1s"
              _hover={{
                transform: "scale(1.2)",
                cursor: "pointer",
              }}
            >
              <Flex flexDirection="column" fontWeight="semibold">
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3b3c01841ca0ed0c/649ddfc3e64f411ef142e76d/outdoor-decor-silo-1027-P-MK015852-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                <Text>Outdoor Living</Text>
              </Flex>
            </Box>
            <Box
              transition="transform 0.1s"
              _hover={{
                transform: "scale(1.2)",
                cursor: "pointer",
              }}
            >
              <Flex flexDirection="column" fontWeight="semibold">
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt14c031e5901496fe/649de03fefa20d89ea4bded7/puzzles-and-games-silo-1027-P-MK017941-260x284.jpg?quality=85&auto=webp&optimize={medium}" />
                <Text>Puzzles & Games</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </div>

      <Box m="5%">
        <Flex gap="3%">
          <Box w="50%">
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt6f5db129af48bc73/647416c920efde5ef2a53b16/harry-and-david-gift-baskets-gourmet-food-tier-summer-fy23.jpg?quality=60&auto=webp&optimize={medium}" />
            <Box>
              <Text
                fontSize="md"
                bgColor="black"
                textColor="white"
                textAlign="start"
                p="1%"
              >
                Delicious Gifts That Make the Celebration
              </Text>
            </Box>
          </Box>
          <Box w="50%">
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt1cea491f3fc559ef/648c76b483c7fb81695f4c62/gifts-from-personalization-mall-tier-summer-fy23-v2.jpg?quality=60&auto=webp&optimize={medium}" />
            <Box>
              <Text
                fontSize="md"
                bgColor="black"
                textColor="white"
                textAlign="start"
                p="1%"
              >
                Custom Creations for Moments That Count
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Review />
      <MyAccordion />
      <Footer />
    </div>
  );
}
export default HomePage;
