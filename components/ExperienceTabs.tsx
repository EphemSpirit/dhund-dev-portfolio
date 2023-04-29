import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Text,
} from "@chakra-ui/react";

const ExperienceTabs = () => {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList display="flex" justifyContent="between">
        <Tab color="brand.subBodyText">Amazon</Tab>
        <Tab color="brand.subBodyText">The Odin Project</Tab>
        <Tab color="brand.subBodyText">SockClub</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="brand.subBodyText"
        borderRadius="1px"
      />
      <TabPanels>
        <TabPanel>
          <Text color="brand.headers">
            My very first job out of grad school, while not strictly a
            programming role, served to renew my interest in coding. I worked at
            Amazon in a linguistic capacity on the Alexa Text-to-Speech system,
            working closely with langauge modellers, where I developed an
            interest in how programming could be used to solve such complex
            problems. In my own role, I took this renewed programming interest
            and use a Low-Code/No-Code JavaScript system to automate task
            assignment between priority queues and help streamline task
            assignment/prioritization more generally. I also used my then
            burdgeoning knowledge of HTML5/CSS3 to help design a website for my
            team's page on Amazon's intranet! I then took my interests to The
            Odin Project.
          </Text>
        </TabPanel>
        <TabPanel>
          <Text color="brand.headers">
            Though it may be considered coursework, the projects I completed and
            the collaboration I had with other developers was invaluable in
            jumpstarting my career in web development. I went through The Odin
            Project while working at Amazon, and through regular collaboration
            with fellow developers, I learned more than I ever thought possible
            and gained experience that easily transferred into a professional
            web development role. I went through the Ruby on Rails track and
            learned from the ground up, cementing an understanding of the Ruby
            language itself, and also SQL, before diving into the Rails
            framework. I learned how to think about programming problems, how to
            use Data Structures, the ins and outs of Rails associations and
            programming best practices, and so much more. The experience I
            gained here allowed me to land my first professional role in web
            development, where my learning continues to this day.
          </Text>
        </TabPanel>
        <TabPanel>
          <Text color="brand.headers">
            My first professional position as a Web Developer started in the
            Fall of 2021, and it's where I continue to work today. After
            finishing The Odin Project I thought I knew a lot about web
            deveopment, but being part of a professional team quickly taught me
            that I would never stop learning. I've learned and grown in this
            role more than I thought I could and to look at my work now compared
            to when I first started is a humbling experience. While at SockClub
            I've worked on our Rails monolith, helping to design internal
            e-commerce systems, and also worked on migrating away from a
            monolith towards a Rails API and NextJS front-end. I've also helped
            design entirely new solutions and helped refine our client-facing
            processes to make them both scalable and easy to use. I've worked on
            features ranging from back-end, to front-end, to full-stack and I'm
            excited to see where my learning takes me!
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ExperienceTabs;
