import { useState, useEffect } from "react";
import { Text, Flex, Spacer } from "@chakra-ui/react";
import BaseMenu from "./BaseMenu";
import Link from "next/link";
import styles from "../src/styles/Navbar.module.css";

const Navbar = () => {
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
    <Flex
      px={12}
      align="center"
      h="75"
      w="100%"
      justifyContent={mobile ? "center" : ""}
      bg="linear-gradient(180deg, rgba(20,19,41,1) 0%, rgba(72,72,58,1) 100%);"
    >
      <Text
        className={styles["navbar-item"]}
        fontSize="3xl"
      >
        <Link href="/">DH</Link>
      </Text>
      {!mobile && (
        <>
          <Spacer />
          <BaseMenu />
        </>
      )}
    </Flex>
  );
};

export default Navbar;
