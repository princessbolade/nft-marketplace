import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Bubbles from "../../assets/bubbles.svg";
import herogirl from "../../assets/herogirl.svg";
import arrowUp from "../../assets/arrowUp.svg";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Hero() {
  return (
    <>
      <Box mx={"auto"} maxWidth={"1440px"} py={"50px"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Box>
              <Text fontWeight={"bold"} fontSize={"24px"}>
                D I S C O V E R{" "}
              </Text>
              <Image src={Bubbles} w={"150px"} pt={"15px"} />
            </Box>
            <Box pt={"35px"}>
              <Heading fontSize={"44px"} letterSpacing={"3px"}>
                Extraodinary Pixels <br />
                And
                <span style={{ color: "#7222F0", paddingLeft: "10px" }}>
                  DigitalArts
                </span>
              </Heading>
              <Text pt={"30px"} fontSize={"16px"} lineHeight={"9"}>
                Create NFTS, sell, and collect unique raribles from <br />{" "}
                creators all over the world on{" "}
                <span style={{ color: "#7222F0", paddingLeft: "10px" }}>
                  OCEANVIEW
                </span>
              </Text>
            </Box>
            <Box
              as="button"
              bg={"#7222F0"}
              color="white"
              mt={"35px"}
              padding={"16px 32px"}
            >
              Trending Auctions
            </Box>
            <Box pt={"55px"}>
              <Text fontWeight={"bold"}>
                Learn more about Oceanview <ArrowForwardIcon />
              </Text>
            </Box>
          </Box>
          <Box>
            <Flex flexDir={"column"}>
              <Image src={herogirl} w="400px" />
              <Box
                bg={
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F72DB1"
                }
                padding={"20px 40px"}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Heading>ATHENA</Heading>
                  <Image src={arrowUp} w={"50px"} />
                </Flex>
                <Text pt="5px" color={"#7E7E7F"}>
                  Auction price
                </Text>
                <Flex pt={"15px"} alignItems={"center"}>
                  <Text fontSize={"34px"}>3.00 ETH</Text>
                  <Text pl={"20px"} color={"#7E7E7F"}>
                    ( $12,450.43 )
                  </Text>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  pt={"35px"}
                >
                  <Box
                    as="button"
                    color={"white"}
                    bg={"linear-gradient(257.38deg, #7222F0 0%, #F72DB1 100%)"}
                    padding={"16px 52px"}
                  >
                    Buy now
                  </Box>
                  <Box
                    as="button"
                    bg={"transparent"}
                    borderColor={"#F72DB1"}
                    border="1px"
                    padding={"16px 32px"}
                  >
                    View Info
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Hero;
