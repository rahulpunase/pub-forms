import React, { Children } from "react";
import styled from "styled-components";
import { getProperties } from "../../ui-utils";

type Size = "xs" | "s" | "m" | "l" | "xl";

type Weight = "normal" | "medium" | "semiBold" | "bold" | "bolder";

interface IText {
  type?: React.ElementType;
  children?: any;
  size?: Size;
  fontWeight?: Weight;
  theme?: any;
}

const getFontSize = ({ theme: { fontSizes }, size }: IText) => {
  if (!size) return "";
  if (size?.includes("em")) return size;
  return fontSizes[size] + "em";
};

const getFontWeight = (weight: Weight) => {
  const weights = {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    bolder: 800,
  };
  return weights[weight];
};

const Text = styled(({ type = "div", size, children, ...props }: IText) =>
  React.createElement(type, props, children)
)`
  font-size: ${(props) => getFontSize(props)};
`;

export default React.memo(Text);
