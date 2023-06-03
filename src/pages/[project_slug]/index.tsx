import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ProjectItems } from "@/data/projects";
import Navbar from "../../../components/Navbar";
import {
  Flex,
  Grid,
  GridItem,
  Text,
  Heading,
  Box,
  ScaleFade,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ProjectShow = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 768 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);

    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  });
  const router = useRouter();
  const project = ProjectItems.filter(
    (item) => item.slug === router.query.project_slug
  )[0];

  const imgWidth = mobile ? 300 : 600;

  return (
    <>
      <Navbar />
      <Grid
        templateColumns={mobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
        gap={6}
        bg="brand.mainBg"
        height={mobile ? "100%" : "100vh"}
      >
        <Flex alignItems="center" justifyContent="center">
          <GridItem>
            <Box
              boxShadow="dark-lg"
              borderRadius="md"
              sx={{
                height: "500px",
                width: "400px",
                position: `${mobile ? "" : "absolute"}`,
                top: "225",
                left: "200",
              }}
            >
              <Swiper navigation={true} modules={[Navigation]}>
                {project?.image_urls.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img}
                      height={100}
                      width={200}
                      alt="Project Image"
                      style={{ height: "500px", width: "400px" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </GridItem>
        </Flex>

        <Flex alignItems="center" justifyContent="center" m={mobile ? 6 : 0}>
          <GridItem height="100%">
            <Flex
              height="100%"
              direction="column"
              mr={8}
              justifyContent="center"
            >
              <ScaleFade initialScale={0.9} in={true}>
                <Heading color="brand.subBodyText" mb={8}>
                  {project?.title}
                </Heading>
                {project?.description.map((paragraph: string, i) => (
                  <Text mb={4} color="brand.headers" key={i}>
                    {paragraph}
                  </Text>
                ))}
                <Text color="brand.headers" sx={{ fontStyle: "italic" }} mb={8}>
                  Technologies used: {project?.techs.join(", ")}
                </Text>
                <Button
                  bg="brand.bodyText"
                  color="brand.subtitles"
                  width="100%"
                  _hover={{ bg: "#e4030e" }}
                  sx={{ width: "50%" }}
                >
                  <Link href="/#myWork">See all Projects</Link>
                </Button>
              </ScaleFade>
            </Flex>
          </GridItem>
        </Flex>
      </Grid>
    </>
  );
};

export default ProjectShow;
