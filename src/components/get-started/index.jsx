import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function GetStarted() {
  return (
    <Box
      mx="auto"
      maxW={"1440px"}
      bg={"linear-gradient(257.38deg, #7222F0 0%, #F72DB1 100%)"}
      py={"50px"}
      my={"50px"}
    >
      <Flex alignItems={"center"} flexDir="column" h={"50%"}>
        <Heading textAlign={"center"} color={"#FFFFFF"} fontSize={"44px"}>
          Get ready to collect <br />
          our NFT
        </Heading>
        <Box
          as="button"
          textTransform={"uppercase"}
          fontSize={"14px"}
          bg={"white"}
          color="#7222f0"
          mx={"auto"}
          padding={"16px 32px"}
          mt={"30px"}
          textAlign={"center"}
        >
          {" "}
          Get Started{" "}
        </Box>
      </Flex>
    </Box>
  );
}

export default GetStarted;
