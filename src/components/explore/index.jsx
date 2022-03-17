import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";
import arrowUp from "../../assets/arrowUp.svg";
import Image1 from "../../assets/imgGallery1.svg";
import Image2 from "../../assets/imgGallery2.svg";
import Image3 from "../../assets/imgGallery3.svg";
import Image4 from "../../assets/imgGallery4.svg";
import Carousel from "framer-motion-carousel";
import React from "react";

const Images = [
  { src: Image1 },
  { src: Image2 },
  { src: Image3 },
  { src: Image4 },
];

function Explore() {
  return (
    <Box mx={"auto"} maxW={"1200px"} py="50px">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading>Trending Auctions</Heading>
        <Flex>
          <Text>View all</Text>
          <Image src={arrowUp} w={"30px"} />
        </Flex>
      </Flex>
      <Box pt={"50px"} width={"100%"}>
        <Carousel autoPlay={false}>
          {Images.map((items, i) => (
            <Image
              key={i}
              draggable="false"
              src={items.src}
              w={"100%"}
              h={"500px"}
            />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

export default Explore;
