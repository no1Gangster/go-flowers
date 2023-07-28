import {
  Heading,
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import "./review.css";

function Review() {
  return (
    <Box>
      {" "}
      <Box>
        <Flex justifyContent="center" gap="4px">
          <Box mt="1%" display={{ base: "none", md: "block" }}>
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4661dd99d6401481/60184a440f1c0c1aa6f87986/instagram-icon.svg?quality=85&auto=webp&optimize={medium}" />
          </Box>
          <Box>
            <Heading fontWeight="hairline">
              Share Your #MadeMeSmile flowers Moment
            </Heading>
          </Box>
        </Flex>
        <Box>
          <Flex gap="7px" m="1%">
            <Box>
              <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0a945604deacfb9e/646fc18b3f34da7adf7b505c/ugc-image-orchids-140953.jpg?quality=85&auto=webp&optimize={medium}" />
            </Box>
            <Box>
              <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt48e451bdbb8e27ef/646fc1d1dfafe54033049640/ugc-image-birthday-wishes-flower-cake-coastal-166259.jpg?quality=85&auto=webp&optimize={medium}" />
            </Box>
            <Box>
              <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt97c3da53f11333f4/646fc20543f559de99b7c262/ugc-image-coastal-breeze-191300.jpg?quality=85&auto=webp&optimize={medium}" />
            </Box>
            <Box>
              <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2f341860a5f70b53/646fc2303f34da3d227b5060/ugc-image-garden-pathway-191307.jpg?quality=85&auto=webp&optimize={medium}" />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box>
        <Box display={{ base: "none", md: "block" }}>
          <Box mt="5%">
            <Heading fontWeight="hairline">
              Some of the Great Things our Customer Say About Us
            </Heading>
          </Box>
          <Box>
            <Flex gap="10px" justifyContent="center" m="2%">
              <Card align="center" w="40%" id="review_card1">
                <CardHeader>
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4c9be4e2d955776a/602a81580aba282006983f75/hp-reviews-final-167891.png?quality=70&auto=webp&optimize={medium}" />
                  <Flex justifyContent="center" mt="14%">
                    <StarIcon repeatCount="5" color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                  </Flex>
                  <Heading size="md" fontWeight="bold">
                    {" "}
                    Beautiful
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    "I bought these for my Nana's birthday she said they were
                    amazingly beautiful!"
                  </Text>
                </CardBody>
                <CardFooter>
                  <Text fontWeight="bold">-Pamela</Text>
                </CardFooter>
              </Card>

              <Card align="center" w="40%" id="review_card2">
                <CardHeader>
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2b874f93791fce4a/62b09064482ba357e65ddbe8/web_icons_125x125_ocean_breeze_orchids.png?quality=70&auto=webp&optimize={medium}" />
                  <Flex justifyContent="center" mt="14%">
                    <StarIcon repeatCount="5" color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                  </Flex>
                  <Heading size="md" fontWeight="bold">
                    {" "}
                    Best Flowers
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    "These flowers are beautiful and just as vibrant as the
                    picture.One of the most beautiful boquets I have ever seen!"
                  </Text>
                </CardBody>
                <CardFooter>
                  <Text fontWeight="bold">-Michelle</Text>
                </CardFooter>
              </Card>

              <Card align="center" w="40%" id="review_card3">
                <CardHeader>
                  <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte0c04d8be69858b7/6259b075b9aa584a4e32649f/web_icons_125x125_classic_budding_rose.png?quality=70&auto=webp&optimize={medium}" />
                  <Flex justifyContent="center" mt="14%">
                    <StarIcon repeatCount="5" color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                  </Flex>
                  <Heading size="md" fontWeight="bold">
                    {" "}
                    Very Happy!
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    "I love how the recipient can plant the roses and enjoy them
                    for a long time.The plant is healthy and the candle I
                    ordered with it smells great!"
                  </Text>
                </CardBody>
                <CardFooter>
                  <Text fontWeight="bold"> -Betty</Text>
                </CardFooter>
              </Card>

              <Card align="center" w="40%" id="review_card4">
                <CardHeader>
                  <Image
                    ml="12%"
                    src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt854645311f2a8ec4/621cf518ba043c4a2c4a9a54/web_icons_125x125_Gourmet_Drizzled_Berries-v2.png?quality=70&auto=webp&optimize={medium}"
                  />
                  <Flex justifyContent="center" mt="14%">
                    <StarIcon repeatCount="5" color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                    <StarIcon color="purple" />
                  </Flex>
                  <Heading size="md" fontWeight="bold">
                    {" "}
                    Sweet Anniversary
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    "The strawberries arrived on time and were fantastic as
                    always.Definitely made my anniversary a lot sweeter!"
                  </Text>
                </CardBody>
                <CardFooter>
                  <Text fontWeight="bold"> -Brian</Text>
                </CardFooter>
              </Card>
            </Flex>
          </Box>
          <Flex justifyContent="center" gap="4px" p="2%">
            <Text>Powered by</Text>
            <Image
              w="2%"
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltcf637a6e16efdb8e/5ea9acbed4b10d15d3e8cfb3/yotpo-logo.png?quality=70&auto=webp&optimize={medium}"
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
export default Review;
