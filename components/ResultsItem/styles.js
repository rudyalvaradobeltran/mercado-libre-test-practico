/* eslint-disable import/no-anonymous-default-export */
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

export const StyledGrid = styled(Grid)({
  cursor: "pointer",
  marginLeft: "0px",
  marginTop: "0px",
  width: "calc(100% + 0px)",
  backgroundColor: "#fff",
  borderBottom: "1px solid #eee",
});

export const StyledGridItem = styled(Grid)({
  "& > p > sup": {
    fontSize: "0.75rem",
    color: "green"
  }
});

export default {
  StyledGrid,
  StyledGridItem
};
