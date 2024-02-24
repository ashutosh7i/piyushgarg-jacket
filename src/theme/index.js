import { extendTheme } from "@chakra-ui/react";
import "./fonts.css";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#27272a",
      },
    }),
  },
});

export default theme;
