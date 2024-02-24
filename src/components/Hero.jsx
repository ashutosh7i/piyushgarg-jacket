"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Button,
  Icon,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

import { ReactElement } from "react";
import { MdArrowOutward } from "react-icons/md";

import { css } from "@emotion/react";

const buttonStyles = css`
  &:hover {
    background-color: transparent;
    color: white;
  }
`;

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Hero({ openModal }) {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
        <Stack spacing={4}>
          <Text
            fontFamily={"Satisfy"}
            fontSize={"55"}
            fontWeight={700}
            color={"#f6ff8d"}
          >
            Like
          </Text>
          <Text
            fontFamily={"Satisfy"}
            fontSize={"55"}
            fontWeight={700}
            color={"#f6ff8d"}
            marginTop={-6}
          >
            Piyush's
          </Text>
          <Text
            fontFamily={"Satisfy"}
            fontSize={"50"}
            fontWeight={700}
            color={"#f6ff8d"}
            marginTop={-8}
          >
            Jacket🧥?
          </Text>

          <Text color={"gray.500"} fontSize={"lg"}>
            We got you covered. This awesome jacket is available for sale. Don't
            miss out on this opportunity to upgrade your wardrobe. Shop now and
            get ready to turn heads wherever you go.
          </Text>
          {/* <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
             // icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              //icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              //icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack> */}

          <HStack pt={10}>
            <Button bgColor="#f6ff8d" variant="solid" onClick={openModal}>
              Buy Now 😎
            </Button>

            <Button
              as="u"
              color="white"
              variant="ghost"
              onClick={() =>
                window.open(
                  "https://twitter.com/ashutosh7i/status/1761033671295848931?ref_src=twsrc%5Etfw",
                  "_blank"
                )
              }
              css={buttonStyles}
            >
              Context?
              <Icon as={MdArrowOutward} w={5} h={5} />
            </Button>
          </HStack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://yt3.googleusercontent.com/H3djB_hVq1Ka1auGf5eCi-wUfwI-kctMW-skVqrXnJwAvqQxI8XSw_ErmyUMNEQmMIxcQgNhNGU=s900-c-k-c0x00ffffff-no-rj"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
