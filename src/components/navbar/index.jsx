import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Logo from "../../assets/logo.svg";
import React from "react";

function Nav() {
  return (
    <Box mx={"auto"} maxW="1200px">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Image src={Logo} w={"150px"} h={"150px"} color="#ec7027" />
        <UnorderedList listStyleType={"none"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <ListItem>MARKETPLACE</ListItem>
            <ListItem pl={"40px"} fontWeight={"bold"}>
              EXPLORE
            </ListItem>
            <ListItem pl={"40px"}>CREATE</ListItem>
          </Flex>
        </UnorderedList>
        <Flex alignItems={"center"} justifyContent={"flex-end"}>
          <Box as="button" bg={"#7222F0"} color="white" padding={"12px 22px"}>
            Connect Wallet
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Nav;
