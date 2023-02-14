import React, { ReactElement } from "react";
import styled from "styled-components";

interface IFlex {
  flexDirection?: "column" | "row";
  flexBasis?: number;
  alignItems?: string;
  justifyContent?: string;
  children: ReactElement;
  flex?: number | string;
  flexGrow?: string;
  flexShrink?: string;
  flexWrap?: string;
  alignContent?: string;
  alignSelf?: string;
  order?: string;
}

const getFlexProps = (props: any) => {
  if (!isNaN(parseFloat(props.flex)) && props.flex) {
    return `${props.flex} auto`;
  } else if (props.flex) {
    return props.flex;
  }
  return "";
};

const Flex = styled(
  ({
    alignContent,
    alignItems,
    alignSelf,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    order,
    children,
    ...props
  }: IFlex) => {
    // validateSingleChild(children, 'Flex');
    return React.cloneElement(children, props);
  }
)`
  &&& {
    align-content: ${(props) => (props.alignContent ? props.alignContent : "")};
    align-self: ${(props) => (props.alignSelf ? props.alignSelf : "")};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
    display: flex;
    flex: ${(props) => getFlexProps(props)};
    flex-basis: ${(props) => (props.flexBasis ? props.flexBasis : "")};
    flex-direction: ${(props) =>
      props.flexDirection ? props.flexDirection : ""};
    flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : "")};
    flex-shrink: ${(props) => (props.flexShrink ? props.flexShrink : "")};
    flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "")};
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : ""};
    order: ${(props) => (props.order ? props.order : "")};
  }
`;

export default Flex;
