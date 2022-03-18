import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import Bubbles from "../../assets/bubbles.svg";
import marketImg from "../../assets/marketimg.svg";
import React from "react";

function Market() {
  return (
    <Box mx={"auto"} maxW={"1440px"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Box>
            <Heading
              textTransform={"uppercase"}
              fontWeight={"bold"}
              fontSize={"24px"}
              letterSpacing={"3"}
            >
              M a r k e t p l a c e
            </Heading>
            <Image src={Bubbles} w={"150px"} pt={"15px"} />
            <Box pt={"35px"}>
              <Heading fontSize={"44px"} color={"#7E7E7F"}>
                NFT Marketplace
              </Heading>
              <Text pt={"25px"} lineHeight={"8"}>
                Create your first art NFTs with NFT art for artists. Create art
                and music art videos just under the $1, <br /> the platform
                works with BSC blockchain and supports oil painting. With
                AirNFTs, you are getting the <br /> control over your NFTs,
                Create, Buy, Sell and Earn with your art NFTs.
              </Text>
              <Box
                as="button"
                color={"white"}
                bg={"linear-gradient(257.38deg, #7222F0 0%, #F72DB1 100%)"}
                padding={"16px 52px"}
                mt={"30px"}
              >
                Explore Items
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Image src={marketImg} w={"100%"} h={"500px"} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Market;
