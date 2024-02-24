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
  GridItem,
  useBreakpointValue,
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
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
