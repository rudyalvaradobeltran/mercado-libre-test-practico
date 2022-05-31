import Link from "@mui/material/Link";
import { StyledBreadcrumbs } from "./styles";

const Breadcrumbs = ({ categories }) => {
  return (
    <StyledBreadcrumbs separator="›" aria-label="breadcrumb">
      {categories.map((category) => {
        return (
          <Link
            key={category}
            underline="hover"
            color="inherit"
            href={`../items?search=${category}`}
          >
            {category}
          </Link>
        );
      })}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
