import React, { ReactElement } from "react";
import styled from "styled-components";
import { getProperties } from "../../ui-utils";

interface ISize {
  height: string | number;
  width: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  children: ReactElement;
}

const Size = styled(
  ({ height, width, maxWidth, maxHeight, children, ...props }: ISize) => {
    return React.cloneElement(children, props);
  }
)`
  height: ${(props) => (props.height ? props.theme.px(props.height) : "")};
  width: ${(props) => (props.width ? props.theme.px(props.width) : "")};
  max-width: ${(props) =>
    props.maxWidth ? props.theme.px(props.maxWidth) : ""};
  max-height: ${(props) =>
    props.maxHeight ? props.theme.px(props.maxWidth) : ""};
`;

export default Size;
