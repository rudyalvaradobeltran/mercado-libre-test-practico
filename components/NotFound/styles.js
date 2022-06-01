/* eslint-disable import/no-anonymous-default-export */
import { styled } from "@mui/material/styles";

export const StyledNotFound = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "calc(100vh - 124px)",
  ".notFoundImage": {
    borderRadius: "100%"
  },
  "& > span": {
    fontSize: "20px",
    paddingTop: "15px"
  }
});

export default { StyledNotFound };
