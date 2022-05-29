import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { itemById } from "../../redux/Item/ItemByIdSlice";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { StyledItemDataGrid, StyledItemDescriptionGrid } from "./styles";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const itemByIdResult = useSelector((store) => store.itemById);

  useEffect(() => {
    if (
      id &&
      !itemByIdResult.loading &&
      !itemByIdResult.error &&
      !("item" in itemByIdResult.data)
    ) {
      dispatch(itemById(id));
    }
  }, [dispatch, id, itemByIdResult]);

  return (
    <>
      {"item" in itemByIdResult.data && (
        <>
          <StyledItemDataGrid container spacing={2}>
            <Grid item xs={3}>
              <Image
                src={itemByIdResult.data.item.picture}
                alt={itemByIdResult.data.item.title}
                width="500"
                height="500"
              />
            </Grid>
            <Grid>
              <p>{`${itemByIdResult.data.item.condition} ${itemByIdResult.data.item.sold_quantity}`}</p>
              <p>{itemByIdResult.data.item.title}</p>
              <p>{itemByIdResult.data.item.price.amount}</p>
              <div>
                <Button variant="contained">Comprar</Button>
              </div>
            </Grid>
          </StyledItemDataGrid>
          <StyledItemDescriptionGrid>
            <Grid item xs={12}>
              <p>Descripción del producto</p>
              <p>{itemByIdResult.data.item.description}</p>
            </Grid>
          </StyledItemDescriptionGrid>
        </>
      )}
    </>
  );
};

export default Item;
