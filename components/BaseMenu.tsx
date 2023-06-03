import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../src/styles/Navbar.module.css";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
// import devResume from "/assets/hund.drew-resume_dev.pdf";

const BaseMenu = () => {
  const openResume = () => {
    window.open('../src/assets/hund.drew-resume_dev.pdf')
  };
  return (
    <Flex w="30%" justify="space-between">
      <Link href="/#aboutMe">
        <Text className={styles["navbar-item"]}>About Me</Text>
      </Link>
      <Link href="/#experience">
        <Text className={styles["navbar-item"]}>Experience</Text>
      </Link>
      <Link href="/#myWork">
        <Text className={styles["navbar-item"]}>My Work</Text>
      </Link>
      <Link href="/assets/hund.drew-resume_dev.pdf" target="_blank">
        <Text mr={8} className={styles["navbar-item"]}>
          Resume
        </Text>
      </Link>
      <Text color="brand.headers">
        <Link href="https://github.com/EphemSpirit" target="_blank">
          <IconContext.Provider value={{ size: "1.5em" }}>
            <BsGithub />
          </IconContext.Provider>
        </Link>
      </Text>
      <Text color="brand.headers">
        <Link
          href="https://linkedin.com/in/drew-j-hund-9163b289"
          target="_blank"
        >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <AiOutlineLinkedin />
          </IconContext.Provider>
        </Link>
      </Text>
    </Flex>
  );
};

export default BaseMenu;
