/* eslint-disable import/no-anonymous-default-export */
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export const StyledItemDataGrid = styled(Grid)({
  width: "calc(100% + 0px)",
  marginLeft: "0px",
  backgroundColor: "#fff",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  "& > div:first-of-type": {
    paddingLeft: "24px",
    paddingTop: "24px",
  },
  "& > div:last-child": {
    paddingRight: "24px",
    paddingTop: "24px",
  },
  "& > div:last-child > button": {
    lineHeight: "2.2rem"
  }
});

export const StyledBreadcrumbContainer = styled(Container)({
  paddingTop: "15px!important",
  paddingRight: "24px!important",
  paddingBottom: "15px!important",
  paddingLeft: "24px!important",
});

export const StyledItemDescriptionGrid = styled(Grid)({
  backgroundColor: "#fff",
  padding: "24px",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px"
});

export const StyledItemContainer = styled(Container)({
  paddingTop: "16px",
  paddingBottom: "24px",
});

export default {
  StyledItemDataGrid,
  StyledItemDescriptionGrid,
  StyledItemContainer,
  StyledBreadcrumbContainer,
};
