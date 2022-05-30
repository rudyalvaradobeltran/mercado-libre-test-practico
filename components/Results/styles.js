/* eslint-disable import/no-anonymous-default-export */
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

export const StyledBreadcrumbContainer = styled(Container)({
  paddingTop: "15px!important",
  paddingRight: "24px!important",
  paddingBottom: "15px!important",
  paddingLeft: "24px!important"
});

export const StyledResultsContainer = styled(Container)({
  paddingTop: "0px",
  paddingBottom: "24px",
  "& > div:first-child": {
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px"
  },
  "& > div > div:last-child": {
    paddingTop: "40px"
  },
  "& > div:nth-child(n+1)": {
    borderBottom: "1px solid #eee"
  },
  "& > div > div:nth-child(2)": {
    paddingRight: "24px"
  },
  "& > div:last-child": {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    borderBottom: "unset"
  }
});

export default {
  StyledBreadcrumbContainer,
  StyledResultsContainer
};
