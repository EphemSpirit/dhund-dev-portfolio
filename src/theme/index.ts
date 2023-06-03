import { extendTheme, ThemeConfig, theme as base } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  ...config,
  colors: {
    brand: {
      bodyText: "#F00511",
      mainBg: "#48483A",
      secondaryBg: "#5C574F",
      headers: "#DEC102",
      subtitles: "#C5D1EB",
      subBodyText: "#f9850b",
    },
  },
  fonts: {
    heading: `Roboto Mono, ${base.fonts?.heading}`,
    body: `Raleway, ${base.fonts?.body}`,
  },
});
