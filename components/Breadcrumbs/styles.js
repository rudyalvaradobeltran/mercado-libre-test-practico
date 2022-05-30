/* eslint-disable import/no-anonymous-default-export */
import { styled } from "@mui/material/styles";
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const StyledBreadcrumbs = styled(Breadcrumbs)({
  fontSize: "1rem",
  cursor: "pointer",
  "& .MuiBreadcrumbs-li > a:hover": {
    textDecoration: "none"
  }
});

export default { StyledBreadcrumbs };
