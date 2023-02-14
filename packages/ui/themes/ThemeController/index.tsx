import { ThemeProvider } from "styled-components";
import theme from "../theme";

const ThemeController = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeController;
