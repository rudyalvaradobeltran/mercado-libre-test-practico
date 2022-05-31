import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { itemById } from "../../redux/Item/ItemByIdSlice";
import Typography from "@mui/material/Typography";
import { StyledGrid, StyledGridItem } from "./styles";
import { formatCurrency } from "../../utils/functions";

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
      <StyledGridItem alignItems="center" item xs={4} md={3}>
        <Image
          src={picture}
          alt={title}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </StyledGridItem>
      <StyledGridItem item xs={8} md={7}>
        <span>
          <Typography variant="h5" mr="10px" component="span">
            {formatCurrency(price)}
          </Typography>
          <sup>{condition === "new" ? "Nuevo" : ""}</sup>
        </span>
        <Typography variant="subtitle1">{title}</Typography>
      </StyledGridItem>
      <StyledGridItem item md={2}>
        <Typography variant="body2">
          {free_shipping ? "Envío gratis" : ""}
        </Typography>
      </StyledGridItem>
    </StyledGrid>
  );
};

export default ResultsItem;
