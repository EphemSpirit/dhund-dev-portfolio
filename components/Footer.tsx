import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Flex>
          <Text color="brand.headers" mr={2}>
            <Link href="https://github.com/EphemSpirit" target="_blank">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <BsGithub />
              </IconContext.Provider>
            </Link>
          </Text>
          <Text color="brand.headers" ml={2}>
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
      </footer>
    </>
  );
};

export default Footer;
