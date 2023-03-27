// import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import Link from "next/link";
import styles from './MobileMenu.module.css'

const MobileMenu = () => {
  return (
    <Menu as="div" className={styles.menu}>
      <Menu.Button>
        <IconContext.Provider value={{ size: "1em", color: "#DEC102" }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </Menu.Button>
      <Menu.Items as="div" className={styles["menu-item"]}>
        <Menu.Item as="div" style={{ color: "#DEC102" }}>
          <Link href="#">About Me</Link>
        </Menu.Item>
        <Menu.Item as="div" style={{ color: "#DEC102" }}>
          <Link href="#">Experience</Link>
        </Menu.Item>
        <Menu.Item as="div" style={{ color: "#DEC102" }}>
          <Link href="#">My Work</Link>
        </Menu.Item>
        <Menu.Item as="div" style={{ color: "#DEC102" }}>
          <Link href="#">Resume</Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default MobileMenu;
