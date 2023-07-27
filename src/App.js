import AllRoutes from "./AllRoutes";
import "./App.css";
import ProductPage from "./productPage/productPage";
import {
  Box,
  Center,
  Text,
  Heading,
  Centre,
  Divider,
  Flex,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
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
          <Center height="100px">
            <Divider orientation="vertical" color="red" />
          </Center>
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
      </Box>

      <AllRoutes />
    </div>
  );
}

export default App;
