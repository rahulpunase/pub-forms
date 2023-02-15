import React from "react";

const MuiFlex = ({ children, ...props }: any) => {
  return React.cloneElement(children, props);
};

export default MuiFlex;
