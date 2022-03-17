import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";
import React from "react";

function Nav() {
  return (
    <Box bg={"black"}>
      <Box mx={"auto"} maxW="1200px" px={"30px"} py={"50px"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Image src={Logo} w={"50px"} h={"50px"} color="#ec7027" />
          <UnorderedList listStyleType={"none"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <ListItem color={"white"}>Marketplace</ListItem>
              <ListItem color={"white"} pl={"40px"}>
                Artwork
              </ListItem>
              <ListItem color={"white"} pl={"40px"}>
                Create
              </ListItem>
              <ListItem color={"white"} pl={"40px"}>
                Field
              </ListItem>
            </Flex>
          </UnorderedList>
          <Flex alignItems={"center"} justifyContent={"flex-end"}>
            <Button bg="#ec7027" color={"white"}>
              Connect Wallet
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Nav;
