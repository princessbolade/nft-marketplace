import { color } from "@chakra-ui/react";
import React from "react";
import Nav from "../../components/navbar";

function Home() {
  return (
    <>
      <Nav />
      <hr
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "black",
          height: "1px",
          border: "none",
          color: "black",
        }}
      />
    </>
  );
}

export default Home;
