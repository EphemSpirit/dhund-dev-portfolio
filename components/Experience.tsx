import React from "react";
import { Flex, Text, Divider } from "@chakra-ui/react";
import ExperienceTabs from "./ExperienceTabs";
import MobileExperienceMenu from "./MobileExperienceMenu";
import { ComponentUniversal } from "../typiings";

const Experience = ({ mobile }: ComponentUniversal) => {
  return (
    <Flex width="100%" justify="center" mb={12}>
      <Flex width="50%" direction="column" justify="center">
        <div id="experience">
          <Text color="brand.bodyText" fontSize="2em" mb={4} width="100%">
            Experience
          </Text>
        </div>

        <Divider mb={4} />
        {!mobile && <ExperienceTabs />}
        {mobile && <MobileExperienceMenu />}
      </Flex>
    </Flex>
  );
};

export default Experience;
