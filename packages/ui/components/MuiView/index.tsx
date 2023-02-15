import { Box } from "@mui/material";
import React from "react";

const MuiView = ({ children, ...props }: any) => {
  return (
    <Box
      sx={{
        ...props,
      }}
    >
      {children}
    </Box>
  );
};

export default MuiView;
