import React from "react";
import ProductCard from "./ProductCard";
import items from "../items.json";
import {
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  Grid,
  VStack,
  GridItem,
  Text,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";

export default function ProductModal({ isOpen, onClose }) {
  const { onOpen } = useDisclosure();
  const columnSize = useBreakpointValue({ base: "1fr", lg: "repeat(4, 1fr)" });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent padding="4">
          <ModalHeader>Buy Now</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns={columnSize} gap={4}>
              {items.map((item) => (
                <GridItem key={item.id}>
                  <ProductCard
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    link={item.link}
                  />
                </GridItem>
              ))}
            </Grid>
          </ModalBody>
          <ModalFooter>
            {useBreakpointValue({
              base: (
                <VStack>
                  <Text>
                    “I choose a lazy person to do a hard job. Because a lazy
                    person will find an easy way to do it.” ― Bill Gates
                  </Text>
                  <Text>and yes, i am that person😂 <Text pr={5} as="a" color="blue" href="https://twitter.com/ashutosh7i">follow🐦</Text> </Text>
                  <Button colorScheme="green" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </VStack>
              ),
              lg: (
                <>
                <HStack spacing={20}>
                  <Text>
                    {" "}
                    “I choose a lazy person to do a hard job. Because a lazy
                    person will find an easy way to do it.” ― Bill Gates
                  </Text>
                  <Text>and yes, i am that person😂 <Text pr={5} as="a" color="blue" href="https://twitter.com/ashutosh7i">follow🐦</Text> </Text>
                  
                  </HStack>
                  <Button colorScheme="green" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </>
              ),
            })}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
