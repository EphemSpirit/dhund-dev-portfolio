import { useRef } from 'react';
import { Divider, Flex, Text, Spacer, ScaleFade } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { ComponentUniversal } from "../typiings";

const About = ({ mobile }: ComponentUniversal) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <ScaleFade initialScale={0.9} in={isInView}>
      <Flex w="100%" justify="center" mt={24} ref={ref}>
        <Flex w="50%" direction="column" justify="center" mb={36}>
          <div id="aboutMe">
            <Text color="brand.bodyText" fontSize="2em" mb={4} w="100%">
              Who Am I?
            </Text>
          </div>
          <Divider />
          <Text color="brand.headers" mt={4} mb={4}>
            I&apos;m Drew! A web developer with about 2 years of professional
            experience building client-facing solutions. But I wasn&apos;t always
            what I am now! The currents of time brought me down a winding path
            before I found my love for code and building with it. I first toyed
            with making websites with Dreamweaver in high school, but a
            burdgeoning love of language lead to me to study linguistics in
            college. Though it may seem unrelated, learning how language works -
            how sentences are constructed, how conversations flow, etc - enabled
            me to look at computer language in the same way when a waning tide
            brought me back to that shore. I view every component or feature I
            build to be part of the larger conversation of the app itself. I&apos;d
            love to collaborate in your app&apos;s conversation if you think we&apos;d be
            a good fit!
          </Text>
          <Text color="brand.subBodyText" mb={4}>
            Technologies I work with:
          </Text>
          <Flex
            sx={{ fontStyle: "italic" }}
            direction={mobile ? "column" : "row"}
            ml={mobile ? 0 : 24}
            w={mobile ? "100%" : "50%"}
            justify="center"
            align="center"
            color="brand.headers"
          >
            <Flex direction="column" mr={4} ml={mobile ? "70px" : ""}>
              <ul>
                <li>TypeScript/Javascript</li>
                <li>Ruby on Rails</li>
                <li>Ruby</li>
              </ul>
            </Flex>
            <Spacer />
            <Flex direction="column" pl={mobile ? "" : "20px"}>
              <ul>
                <li>NextJS/React</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
            </Flex>
            <Spacer />
            <Flex direction="column" pl={mobile ? "" : "40px"}>
              <ul>
                <li>Node/Express</li>
                <li>HTML5/CSS3</li>
                <li>PostgreSQL</li>
              </ul>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ScaleFade>
  );
};

export default About;
