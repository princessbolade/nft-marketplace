import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Bubbles from "../../assets/bubbles.svg";
import girl from "../../assets/lilgirl.svg";
import swirls from "../../assets/swirls.svg";
import yinman from "../../assets/yinman.svg";
import circle from "../../assets/circle.svg";
import React from "react";

const btn = ["Art", "Sport", "Photography", "Pattern"];

const item = [
  {
    src: girl,
    text: "@johnny",
    text2: " 0.005 ETH",
    btnText: " Place Bid",
    btnTextTwo: " Share",
  },
  {
    src: swirls,
    text: "@johnny",
    text2: " 0.005 ETH",
    btnText: " Place Bid",
    btnTextTwo: " Share",
  },
  {
    src: yinman,
    text: "@johnny",
    text2: " 0.005 ETH",
    btnText: " Place Bid",
    btnTextTwo: " Share",
  },
  {
    src: circle,
    text: "@johnny",
    text2: " 0.005 ETH",
    btnText: " Place Bid",
    btnTextTwo: " Share",
  },
];

function TopSellers() {
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"100px"}>
      <Box>
        <Text fontWeight={"bold"} fontSize={"24px"}>
          C O L L E C T I O N
        </Text>
        <Image src={Bubbles} w={"150px"} pt={"15px"} />
        <Flex alignItems={"center"} justifyContent={"flex-start"} pt={"30px"}>
          {btn.map((i) => (
            <Box
              as="button"
              padding={"10px 32px"}
              bg={"#7222F0"}
              color={"white"}
              mr={"15px"}
              fontSize={"16px"}
              borderRadius={"10px"}
            >
              {i}
            </Box>
          ))}
        </Flex>
      </Box>
      <Flex alignItems={"center"} justifyContent={"space-between"} pt={"50px"}>
        {item.map((items, i) => (
          <Box
            padding={"20px"}
            bg={
              "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F72DB1"
            }
            mr={"20px"}
            borderRadius={"20px"}
          >
            <Image src={items.src} />
            <Flex
              alignItems={"center"}
              justifyContent="space-between"
              mt={"10px"}
              padding={"20px"}
            >
              <Text fontWeight={"bold"}>{items.text}</Text>
              <Text fontSize={"24px"} fontWeight={"bold"}>
                {items.text2}
              </Text>
            </Flex>
            <Flex>
              <Box
                as="button"
                textTransform={"uppercase"}
                fontSize={"14px"}
                bg={"#7222F0"}
                color="white"
                mx={"auto"}
                padding={"16px 32px"}
                mt={"25px"}
                textAlign={"center"}
              >
                {items.btnText}
              </Box>
              <Box
                as="button"
                textTransform={"uppercase"}
                fontSize={"14px"}
                bg={"transparent"}
                color="black"
                border={"1px"}
                borderColor={"#7222F0"}
                mx={"auto"}
                padding={"16px 32px"}
                mt={"25px"}
                textAlign={"center"}
              >
                {items.btnTextTwo}
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default TopSellers;
