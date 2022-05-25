import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import MercadoLibreIcon from "../../public/favicon.svg";
import SearchIcon from "@mui/icons-material/Search";
import {
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./styles";

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Image src={MercadoLibreIcon} alt="Mercado Libre" />
          </StyledIconButton>
          <Search>
            <StyledInputBase
              placeholder="Nunca dejes de buscar"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
}
