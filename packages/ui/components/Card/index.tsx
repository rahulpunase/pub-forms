import React from "react";
import styled from "styled-components";

const Card = styled(({ background, children, ...props }) => {
  return React.cloneElement(children, props);
})`
  background: ${(props) => props.background};
  color: var(--qwerty);
`;

export default Card;
