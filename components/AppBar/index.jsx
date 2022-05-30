import { useState } from "react";
import { useRouter } from 'next/router';
import Box from "@mui/material/Box";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { itemSearch } from "../../redux/Item/ItemSearchSlice";
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

const AppBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = () => {
    if (search) {
      dispatch(itemSearch(search));
      router.push(`../items?search=${search}`);
    }
  }

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  const handleToolbarIconClick = () => {
    router.push('/');
  }

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
            onClick={handleToolbarIconClick}
          >
            <Image src={MercadoLibreIcon} alt="icon" width="42" height="42" />
          </StyledIconButton>
          <Search>
            <StyledInputBase
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => handleOnKeyDown(e)}
              placeholder={texts.searchPlaceholder}
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper onClick={(handleSearch)}>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
}

export default AppBar;