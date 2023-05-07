import React, { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { Project } from "../typiings";
import Image from "next/image";
import {
  Text,
  Heading,
  Card,
  CardBody,
  Box,
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
      <Card ref={ref} bg="#676757" border="1px" boxShadow="dark-lg">
        <CardBody>
          <Image
            src={project.image_url}
            width={300}
            height={200}
            alt="project thumbnail"
          />
          <Heading size="md" color="brand.subBodyText" my={4}>
            {project.title}
          </Heading>
          <Text mb={2} color="brand.headers">
            {project.short_description}
          </Text>
          <Link href={`${project.slug}`}>
            <Button
              bg="brand.bodyText"
              color="brand.subtitles"
              width="100%"
              _hover={{ bg: "#e4030e" }}
            >
              View Project
            </Button>
          </Link>
        </CardBody>
      </Card>
    </ScaleFade>
  );
};

export default ProjectsCard;
