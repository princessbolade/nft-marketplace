import { color } from "@chakra-ui/react";
import React from "react";
import Hero from "../../components/hero";
import Nav from "../../components/navbar";
import SubHero from "../../components/sub-hero";

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
      <Hero />
      <SubHero />
    </>
  );
}

export default Home;
