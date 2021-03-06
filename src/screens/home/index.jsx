import React from "react";
import Explore from "../../components/explore";
import binance from "../../assets/binance.svg";
import eth from "../../assets/eth.svg";
import blockchain from "../../assets/blockchain.svg";
import Hero from "../../components/hero";
import Market from "../../components/market-hero";
import Nav from "../../components/navbar";
import SubHero from "../../components/sub-hero";
import { Image, Flex } from "@chakra-ui/react";
import TopSellers from "../../components/top-contributors";
import GetStarted from "../../components/get-started";
import Footer from "../../components/footer";

const sponsors = [{ src: binance }, { src: eth }, { src: blockchain }];

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
      <Flex
        alignItems={"center"}
        flexDir={"row"}
        justifyContent={"space-between"}
        py={"50px"}
        my={"50px"}
        bg={"linear-gradient(257.38deg, #7222F0 0%, #F72DB1 100%)"}
        mx={"auto"}
        maxW={"1440px"}
      >
        {sponsors.map((items, i) => (
          <Image key={i} src={items.src} w={"100%"} h={"50px"} />
        ))}
      </Flex>
      <TopSellers />
      <GetStarted />
      <Footer />
    </>
  );
}

export default Home;
