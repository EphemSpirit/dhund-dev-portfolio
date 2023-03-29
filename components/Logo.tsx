import { Flex, Text } from "@chakra-ui/react";
import styles from "../src/styles/Navbar.module.css";
import Link from "next/link";

interface LogoProps {
  mobile: Boolean;
}

const Logo = ({ mobile }: LogoProps) => {
  return (
    <Flex
      className={styles["navbar-item"]}
      px={12}
      align="center"
      h="75"
      w="100%"
      justifyContent={mobile ? "center" : ""}
      bg="linear-gradient(180deg, rgba(20,19,41,1) 0%, rgba(72,72,58,1) 100%);"
    >
      <Text
        color="brand.headers"
        className={styles["navbar-item"]}
        fontSize="3xl"
      >
        <Link href="/">DH</Link>
      </Text>
    </Flex>
  );
};

export default Logo;
