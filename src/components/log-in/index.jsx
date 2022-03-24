import React from "react";
import ceasar from "../../assets/ceasar.svg";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
} from "@chakra-ui/react";

function Login() {
  return (
    <Box mx={"auto"} maxW={"1440px"}>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#7222F0"}>Forgot password?</Link>
              </Stack>
              <Box
                as="button"
                textTransform={"uppercase"}
                fontSize={"14px"}
                bg={"#7222F0"}
                color="white"
                padding={"12px 22px"}
              >
                Sign in
              </Box>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Login;
