import {
  Box,
  chakra,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <Container
      bg={"#27272a"}
      as={Stack}
      color={"white"}
      maxW={"full"}
      py={4}
      mt={10}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <HStack>
        <Text>Made with 💖 by</Text>
        <Text
          onClick={() => window.open("https://ashutosh7i.dev")}
          cursor="pointer"
          fontSize="md"
          color={"silver"}
        >
          Ashutosh7i
        </Text>
      </HStack>
    </Container>
  );
}
