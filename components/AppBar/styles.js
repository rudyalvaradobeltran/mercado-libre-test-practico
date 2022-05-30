/* eslint-disable import/no-anonymous-default-export */
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff159",
});

export const StyledToolbar = styled(Toolbar)({
  maxWidth: "1000px",
  alignSelf: "center",
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: "0px",
  maxWidth: "50px",
  "&:hover": {
    backgroundColor: "unset",
  },
  [theme.breakpoints.up("xs")]: {
    paddingLeft: "8px",
  },
  [theme.breakpoints.up("lg")]: {
    marginRight: "36px"
  },
  "& img": {
    width: "42px!important",
    height: "42px!important"
  }
}));

export const Search = styled("div")(({ theme }) => ({
  color: "#000",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginRight: 0,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.only("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#eee",
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
  padding: theme.spacing(1, 1),
  height: "100%",
  position: "absolute",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "16px",
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    [`${theme.breakpoints.down("md")} and (orientation: portrait)`]: {
      paddingRight: `calc(1em + ${theme.spacing(10)})`,
    },
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "1rem",
    [theme.breakpoints.only("sm")]: {
      width: "60ch",
    },
    [`${theme.breakpoints.only("sm")} and (orientation: landscape)`]: {
      width: "50ch",
    },
    [theme.breakpoints.up("md")]: {
      width: "80ch",
    },
  },
}));

export default {
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
};
