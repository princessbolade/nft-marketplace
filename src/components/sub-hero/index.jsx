import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Abstract from "../../assets/abstract.svg";
import arrowUp from "../../assets/arrowUp.svg";
import React from "react";

function SubHero() {
  return (
    <Box mx={"auto"} maxW={"1200px"} py={"50px"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Box>
            <Image src={Abstract} w={"1000px"} />
          </Box>
        </Box>
        <Box ml={"280px"}>
          <Heading fontSize={"44px"} color={"#7E7E7F"}>
            Fresh Kills
          </Heading>
          <Text fontSize={"16px"} pt={"20px"}>
            Audio visual collection offering production
            <br /> perks to its namesake film. <br /> <br /> The innovation was
            first brought to limelight by the visual Artist O’telo in his first
            collection of “Celestial Humans”
          </Text>
          <Flex
            pt={"35px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Flex alignItems={"center"}>
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 136 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1401 33.89L45.9601 7.07L38.8901 0L0.000137329 38.89L38.8901 77.78L45.9601 70.71L19.1401 43.89H135.78V33.89H19.1401Z"
                    fill="#DBDBDB"
                  />
                </svg>

                <svg
                  width="124"
                  height="32"
                  viewBox="0 0 234 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M214.28 33.89L187.46 7.07L194.53 0L233.42 38.89L194.53 77.78L187.46 70.71L214.28 43.89H0.780273V33.89H214.28Z"
                    fill="#7222F0"
                  />
                </svg>
              </Flex>
            </Box>
            <Box>
              <Flex alignItems={"center"}>
                <Text>View details</Text>
                <Image src={arrowUp} w={"30px"} />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default SubHero;
