import { Text, Flex, Spacer } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
import styles from "../src/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <Flex
      className="hero-bg"
      px={12}
      align="center"
      h="75"
      w="100%"
      bg="linear-gradient(180deg, rgba(20,19,41,1) 0%, rgba(72,72,58,1) 100%);"
    >
      <Text
        color="brand.headers"
        className={styles["navbar-item"]}
        fontSize="3xl"
      >
        <Link href="/">
          DH
        </Link>
      </Text>
      <Spacer />
      <Flex w="30%" justify="space-between">
        <Text className={styles["navbar-item"]} color="brand.headers">
          About Me
        </Text>
        <Text className={styles["navbar-item"]} color="brand.headers">
          Experience
        </Text>
        <Text className={styles["navbar-item"]} color="brand.headers">
          My Work
        </Text>
        <Text mr={8} className={styles["navbar-item"]} color="brand.headers">
          Resume
        </Text>
        <Text color="brand.headers">
          <Link href="https://github.com/EphemSpirit" target="_blank">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <BsGithub />
            </IconContext.Provider>
          </Link>
        </Text>
        <Text color="brand.headers">
          <Link href="https://linkedin.com/in/drew-j-hund-9163b289" target="_blank">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <AiOutlineLinkedin />
            </IconContext.Provider>
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
