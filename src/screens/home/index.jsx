import React from "react";
import Explore from "../../components/explore";
import Hero from "../../components/hero";
import Market from "../../components/market-hero";
import Nav from "../../components/navbar";
import SubHero from "../../components/sub-hero";

function Home() {
  return (
    <>
      <Nav />
      <hr
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          backgroundColor: "black",
          height: "1px",
          border: "none",
          color: "black",
        }}
      />
      <Hero />
      <SubHero />
      <Explore />
      <Market />
    </>
  );
}

export default Home;
