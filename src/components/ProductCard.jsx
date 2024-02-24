import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

function ProductCard({ name, price, image, link }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="300"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Flex justifyContent="center">
          <Image
            src={image}
            maxH={300}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            onClick={handleClick} // Add this line
            style={{ cursor: "pointer" }} // Add this line
          />
        </Flex>
        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              lineHeight="tight"
              noOfLines={3}
            >
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a display={"flex"} pt={3}>
                <Icon
                  as={FiShoppingCart}
                  h={10}
                  w={10}
                  onClick={handleClick}
                  alignSelf={"center"}
                />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="xl">
                ₹
              </Box>
              {" " + price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
