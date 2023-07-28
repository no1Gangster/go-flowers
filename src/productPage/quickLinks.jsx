import React from "react";
import "./quickLinks.css";
import { Link } from "react-router-dom";
import { Button, Box, Flex, Text, Input, Image } from "@chakra-ui/react";

function QuickLinks() {
  return (
    <div id="left_box">
      <div>
        <Box bg="#7A4988" p="15px" m="1% 6%" w="90%" borderRadius="3%">
          <Flex flexDirection="column" gap="1px">
            <Box>
              <Text fontWeight="bold" color="white">
                FIND AVAILABLE PRODUCTS!
              </Text>
            </Box>

            <Box>
              <Text fontSize="x-small" color="white">
                ENTER DELIVERY ZIP CODE OR ADDRESS*
              </Text>
              <Input size="xs" />
            </Box>
            <Box>
              <Text fontSize="x-small" color="white">
                LOCATION TYPE:
              </Text>
              <select bg="white" color="black" placeholder="Residence:">
                <option>BBSR</option>
                <option>RKL</option>
              </select>
            </Box>
            <Box>
              <Button
                m="2% 22%"
                bg="green"
                textColor="white"
                fontWeight="bold"
                w="50%"
                p="4%"
              >
                GO
              </Button>
            </Box>
          </Flex>
        </Box>
      </div>
      <div id="linkbox1">
        <h4>POPULAR SUMMER FLOWERS</h4>
        <Link to={"/summer"}>Summer</Link>
        <Link>Daises</Link>
        <Link>Roses</Link>
        <Link>Lilies</Link>
      </div>
      <div id="linkbox2">
        <h4>SUMMER OCCASIONS</h4>
        <Link>Pride</Link>
        <Link>Father's day</Link>
        <Link>Fourth of July</Link>
        <Link>Summer BBQs & Grilling</Link>
        <Link>Summer Birthday</Link>
      </div>
      <Box m="10% 10%">
        <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbd8e878899d3f1bd/5d52d450696dde105b7d59dd/smile_guarantee.jpg" />
      </Box>
    </div>
  );
}

export default QuickLinks;
