import React from "react";
import styled from "styled-components";

const View = styled(({ component = "div", children, ...props }) =>
  React.createElement(component, props, children)
)`
  ${""}
`;

export default View;
