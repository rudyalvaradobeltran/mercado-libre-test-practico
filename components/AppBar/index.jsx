import { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { fetchItem } from "./../../redux/Item/ItemSlice";
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
import { texts } from "../../utils/properties";

export default function AppBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="icon"
            sx={{ mr: 2 }}
          >
            <Image src={MercadoLibreIcon} alt="icon" />
          </StyledIconButton>
          <Search>
            <StyledInputBase
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={texts.searchPlaceholder}
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper onClick={() => dispatch(fetchItem(search))}>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
}
