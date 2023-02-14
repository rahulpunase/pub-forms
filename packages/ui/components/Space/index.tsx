import React from "react";
import styled from "styled-components";

const Space = styled(({ margin, padding, children, ...props }) => {
  // validateSingleChild(children, 'Space');
  return React.cloneElement(children, props);
})`
  margin: ${(props) => (props.margin ? `${props.theme.px(props.margin)}` : "")};
  padding: ${(props) =>
    props.padding ? `${props.theme.px(props.padding)}` : ""};
`;

export default Space;
