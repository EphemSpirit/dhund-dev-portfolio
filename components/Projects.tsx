import React from "react";
import { ComponentUniversal } from "../typiings";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ProjectItems } from "@/data/projects";
import ProjectsCard from "./ProjectsCard";

const Projects = ({ mobile }: ComponentUniversal) => {
  return (
    <Box mx={32}>
      <Grid templateColumns={mobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"} gap={12}>
        {ProjectItems.map((project) => (
          <GridItem>
            <ProjectsCard project={project} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
