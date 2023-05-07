import React from "react";
import { Project } from "../typiings";
import Image from 'next/image'
import { Text, Heading, Card, CardHeader, CardBody } from "@chakra-ui/react";

interface ProjectCardProps {
  project: Project;
}

const ProjectsCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <CardBody>
        <Image src={project.image_url} width={300} height={200} alt='project thumbnail' />
        <Heading size="md">{project.title}</Heading>
        <Text>
            {project.short_description}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ProjectsCard;
