/* eslint-disable import/no-anonymous-default-export */
import { styled } from "@mui/material/styles";

export const StyledSpinner = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  position: "fixed",
  height: "100vh",
  width: "100%",
  zIndex: "1",
  paddingBottom: "128px",
});

export default { StyledSpinner };
