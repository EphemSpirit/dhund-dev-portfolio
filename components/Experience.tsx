import React, { useRef } from "react";
import { Flex, Text, Divider, ScaleFade } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import ExperienceTabs from "./ExperienceTabs";
import MobileExperienceMenu from "./MobileExperienceMenu";
import { ComponentUniversal } from "../typiings";

const Experience = ({ mobile }: ComponentUniversal) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <ScaleFade initialScale={0.9} in={isInView}>
      <Flex width="100%" justify="center" mb={12} ref={ref}>
        <Flex width="50%" direction="column" justify="center">
          <div id="experience">
            <Text color="brand.bodyText" fontSize="2em" mb={4} width="100%">
              What I&apos;ve Been Up To
            </Text>
          </div>

          <Divider mb={4} />
          {!mobile && <ExperienceTabs />}
          {mobile && <MobileExperienceMenu />}
        </Flex>
      </Flex>
    </ScaleFade>
  );
};

export default Experience;
