import React from "react";
import { ComponentUniversal } from "../typiings";
import { Text, Grid, GridItem, Flex, Divider } from "@chakra-ui/react";
import { ProjectItems } from "@/data/projects";
import ProjectsCard from "./ProjectsCard";

const Projects = ({ mobile }: ComponentUniversal) => {
  return (
    <Flex width="100%" justify="center" mb={12}>
      <Flex width="75%" direction="column" justify="center">
        <div id="myWork">
          <Text color="brand.bodyText" fontSize="2em" mb={4} width="100%" align='center'>
            Projects
          </Text>
        </div>
        <Divider mb={12} />
        <Grid
          templateColumns={mobile ? "repeat(1, 1fr)" : "repeat(4, 1fr)"}
          gap={12}
        >
          {ProjectItems.map((project) => (
            <GridItem key={project.id}>
              <ProjectsCard project={project} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Projects;
