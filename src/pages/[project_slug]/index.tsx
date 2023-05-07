import React from "react";
import { useRouter } from "next/router";
import { ProjectItems } from "@/data/projects";

const ProjectShow = () => {
  const router = useRouter();
  const project = ProjectItems.filter(
    (item) => item.slug === router.query.project_slug
  )[0];
  return <div>ProjectShow: {project?.title || 'not there'}</div>;
};

export default ProjectShow;
