import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import React from "react";

function Footer() {
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"100px"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Image src={logo} w={"150px"} />
          <Text pt={"25px"} fontSize={"16px"}>
            The best NFT marketplace website in <br />
            the world and feel your experience in <br /> selling or buy our work
          </Text>
        </Box>
        <Box>
          <Text fontSize={"18px"} fontWeight={"bold"}>
            About
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            Product
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            Resource
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            Term & Condition
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            FAQ
          </Text>
        </Box>
        <Box>
          <Text fontSize={"18px"} fontWeight={"bold"}>
            Company
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            Our Team
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            Partner With Us
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            Privacy & Policy
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            Features
          </Text>
        </Box>
        <Box>
          <Text fontSize={"18px"} fontWeight={"bold"}>
            Contact
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            +012 3456789
          </Text>
          <Text fontSize={"16px"} pt={"15px"}>
            adorableprogrammer@gmail.com
          </Text>
          <Flex
            alignItems={"center"}
            justifyContent={"flex-start"}
            fontSize={"16px"}
            pt={"15px"}
          >
            <Box w={"35px"} mr={"10px"} pt={"15px"}>
              <i className="fa-brands fa-instagram"></i>
            </Box>
            <Box w={"35px"} mr={"10px"} pt={"15px"}>
              <i className="fa-brands fa-twitter"></i>
            </Box>
            <Box w={"35px"} mr={"10px"} pt={"15px"}>
              <i className="fa-brands fa-youtube"></i>{" "}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
