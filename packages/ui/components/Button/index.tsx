import MuiButton from "@mui/material/Button";

const Button = ({ ...props }) => (
  <MuiButton {...props}>{props.children}</MuiButton>
);

export default Button;
