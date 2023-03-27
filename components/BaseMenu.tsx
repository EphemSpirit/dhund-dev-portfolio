import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from '../src/styles/Navbar.module.css'
import { IconContext } from 'react-icons'
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";


const BaseMenu = () => {
  return (
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
