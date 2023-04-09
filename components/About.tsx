import { Divider, Flex, Text, Slide, Spacer } from "@chakra-ui/react";
import styles from "./About.module.css";

const About = () => {
  return (
    <Slide direction="bottom" in={true}>
      <Flex w="100%" justify="center">
        <Flex w="50%" direction="column" justify="center" mb={36}>
          <div id="aboutMe">
            <Text color="brand.bodyText" fontSize="2em" mb={4} w="100%">
              Who Am I?
            </Text>
          </div>
          <Divider />
          <Text color="brand.headers" mt={4} mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            viverra volutpat turpis eget accumsan. Maecenas vehicula, nunc quis
            egestas bibendum, ligula sapien malesuada dolor, vitae faucibus
            turpis augue sit amet felis. Morbi nec orci vestibulum, convallis mi
            sed, faucibus orci. Mauris et purus gravida, aliquam sapien nec,
            fringilla neque. Sed tempor, velit vitae malesuada lacinia, sem
            lacus rutrum nunc, a sagittis velit elit nec ex. Quisque iaculis
            fringilla lacus sed dapibus. Duis convallis convallis est, rutrum
            posuere justo bibendum condimentum. Nam tempor enim ac lorem
            interdum, vel feugiat erat malesuada. Aliquam erat volutpat. Duis
            ullamcorper bibendum eros, eget mollis felis dignissim nec.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Ut porta, eros pharetra dapibus feugiat,
            velit leo feugiat lacus, sit amet dapibus sem nisi id purus. Nullam
            blandit metus sed est semper, id maximus lacus semper. Quisque non
            consectetur purus. Curabitur porta, odio ac.
          </Text>
          <Text color="brand.headers" mb={4}>Technologies I work with:</Text>
          <Flex ml={24} w="25%" justify="center" color="brand.headers">
            <Flex direction="column" mr={4}>
              <ul>TypeScript/JavaScript</ul>
              <ul>Ruby on Rails</ul>
              <ul>Ruby</ul>
            </Flex>
            <Spacer />
            <Flex direction="column">
              <ul>NextJS/React</ul>
              <ul>Tailwind</ul>
              <ul>Bootstrap</ul>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Slide>
  );
};

export default About;
