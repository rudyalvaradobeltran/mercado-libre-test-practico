import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { itemById } from "../../redux/Item/ItemByIdSlice";
import Grid from "@mui/material/Grid";
import { StyledGrid } from "./styles";

const ResultsItem = ({
  item: { id, picture, price, title, condition, free_shipping },
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleItemClick = (id) => {
    dispatch(itemById(id));
    router.push({
      pathname: "/items/[id]",
      query: { id },
    });
  };

  return (
    <StyledGrid container spacing={2} onClick={() => handleItemClick(id)}>
      <Grid item xs={3}>
        <Image src={picture} alt={title} width="90" height="90" />
      </Grid>
      <Grid item xs={7}>
        <p>{`${price.amount} ${condition}`}</p>
        <p>{title}</p>
      </Grid>
      <Grid item xs={2}>
        <p>{free_shipping.toString()}</p>
      </Grid>
    </StyledGrid>
  );
};

export default ResultsItem;
