import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const ExperienceTabs = () => {
  return (
    <Tabs variant="enclosed">
      <TabList display="flex" justifyContent="between">
        <Tab color="brand.subBodyText">The Odin Project</Tab>
        <Tab color="brand.subBodyText">Amazon</Tab>
        <Tab color="brand.subBodyText">SockClub</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          TOP!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
          tempus turpis. Cras luctus accumsan lacus eu malesuada. Vivamus
          posuere nulla tristique, tempus ligula in, malesuada lacus.
          Suspendisse ullamcorper pulvinar mi, eu facilisis libero convallis
          venenatis. Donec hendrerit commodo elit. Fusce in odio imperdiet,
          faucibus justo sit amet, volutpat mauris. Quisque nec urna a dolor
          scelerisque varius id vitae felis. Cras feugiat dapibus felis.
          Praesent pharetra ipsum ac ante facilisis, vitae tincidunt tellus
          porttitor. Duis fermentum pretium quam, id consectetur tellus
          hendrerit id. Aliquam porttitor purus eget justo laoreet, non
          venenatis est mollis. In hac habitasse platea dictumst. Nam quis ex
          turpis. Integer at auctor orci, in feugiat nunc. Maecenas a
          ullamcorper elit. Praesent venenatis massa nec nisi elementum, ac
          egestas neque vehicula. In quis.
        </TabPanel>
        <TabPanel>
          AMAZON!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
          tempus turpis. Cras luctus accumsan lacus eu malesuada. Vivamus
          posuere nulla tristique, tempus ligula in, malesuada lacus.
          Suspendisse ullamcorper pulvinar mi, eu facilisis libero convallis
          venenatis. Donec hendrerit commodo elit. Fusce in odio imperdiet,
          faucibus justo sit amet, volutpat mauris. Quisque nec urna a dolor
          scelerisque varius id vitae felis. Cras feugiat dapibus felis.
          Praesent pharetra ipsum ac ante facilisis, vitae tincidunt tellus
          porttitor. Duis fermentum pretium quam, id consectetur tellus
          hendrerit id. Aliquam porttitor purus eget justo laoreet, non
          venenatis est mollis. In hac habitasse platea dictumst. Nam quis ex
          turpis. Integer at auctor orci, in feugiat nunc. Maecenas a
          ullamcorper elit. Praesent venenatis massa nec nisi elementum, ac
          egestas neque vehicula. In quis.
        </TabPanel>
        <TabPanel>
          SOCKCLUB!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
          tempus turpis. Cras luctus accumsan lacus eu malesuada. Vivamus
          posuere nulla tristique, tempus ligula in, malesuada lacus.
          Suspendisse ullamcorper pulvinar mi, eu facilisis libero convallis
          venenatis. Donec hendrerit commodo elit. Fusce in odio imperdiet,
          faucibus justo sit amet, volutpat mauris. Quisque nec urna a dolor
          scelerisque varius id vitae felis. Cras feugiat dapibus felis.
          Praesent pharetra ipsum ac ante facilisis, vitae tincidunt tellus
          porttitor. Duis fermentum pretium quam, id consectetur tellus
          hendrerit id. Aliquam porttitor purus eget justo laoreet, non
          venenatis est mollis. In hac habitasse platea dictumst. Nam quis ex
          turpis. Integer at auctor orci, in feugiat nunc. Maecenas a
          ullamcorper elit. Praesent venenatis massa nec nisi elementum, ac
          egestas neque vehicula. In quis.
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ExperienceTabs;
