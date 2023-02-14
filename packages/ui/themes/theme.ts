import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {},
  fontSizes: {
    xs: 0.8,
    s: 1,
    m: 1.2,
    l: 1.4,
    xl: 1.6,
  },
  fontWeight: {
    bold: 500,
  },
  appliedTheme: "light",
  px: (value: any) => {
    const values = [].concat(value);
    return values
      .map((v: any) => (typeof v === "string" ? v : `${v * 8}px`))
      .join(" ");
  },
};

export default theme;
