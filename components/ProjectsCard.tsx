import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Project } from "../typiings";
import Image from "next/image";
import {
  Text,
  Heading,
  Card,
  CardBody,
  Flex,
  ScaleFade,
  Button,
} from "@chakra-ui/react";

interface ProjectCardProps {
  project: Project;
}

const ProjectsCard = ({ project }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <ScaleFade initialScale={0.9} in={isInView} whileHover={{ scale: 1.1 }}>
      <Card ref={ref} bg="#676757" border="1px" boxShadow='dark-lg'>
        <CardBody>
          <Image
            src={project.image_url}
            width={300}
            height={200}
            alt="project thumbnail"
          />
          <Heading size="md">{project.title}</Heading>
          <Text>{project.short_description}</Text>
          <Button>View Project</Button>
        </CardBody>
      </Card>
    </ScaleFade>
  );
};

export default ProjectsCard;
