import React from "react";

const MuiCard = ({ children, ...props }: any) => {
  return React.cloneElement(children, props);
};

export default MuiCard;
