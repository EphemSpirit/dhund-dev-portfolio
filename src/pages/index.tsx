import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import About from "../../components/About";

export default function Home() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 768 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);

    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  });
  return (
    <>
      <Head>
        <title>EphemSpirit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {/* {!mobile && <Navbar />}
        {mobile && <Logo mobile={mobile} />} */}
        <Box h="100vh" bg="brand.mainBg" style={{ overflow: "scroll" }}>
          <About mobile={mobile} />
        </Box>
        {mobile && (

          <Footer />
        )}
      </main>
    </>
  );
}
