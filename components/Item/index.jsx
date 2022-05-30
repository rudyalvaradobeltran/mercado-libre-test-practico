import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { itemById } from "../../redux/Item/ItemByIdSlice";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Breadcrumbs from "../Breadcrumbs";
import Typography from "@mui/material/Typography";
import { formatCurrency } from "../../utils/functions";
import {
  StyledItemDataGrid,
  StyledBreadcrumbContainer,
  StyledItemDescriptionGrid,
  StyledItemContainer,
} from "./styles";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.itemById);

  useEffect(() => {
    if (id && !loading && !error && !("item" in data)) {
      dispatch(itemById(id));
    }
  }, [data, dispatch, error, id, loading]);

  return (
    <>
      {data.categories && (
        <StyledBreadcrumbContainer maxWidth="md">
          <Breadcrumbs categories={data.categories} />
        </StyledBreadcrumbContainer>  
      )}
      <StyledItemContainer maxWidth="md">
        {"item" in data && (
          <>
            <StyledItemDataGrid container spacing={2}>
              <Grid item xs={12} md={8} style={{width: '100%', height: '100%', position: 'relative'}}>
                <Image
                  src={data.item.picture}
                  alt={data.item.title}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  priority
                />
              </Grid>
              <Grid item xs={12} md={4} pl={5} pr={5}>
                <Typography variant="body2" component="div" mb="10px">{`${
                  data.item.condition === "new" ? "Nuevo" : "Usado"
                } · ${data.item.sold_quantity} Vendidos`}</Typography>
                <Typography variant="h6" component="div" mb="10px" lineHeight={1.25}>
                  {data.item.title}
                </Typography>
                <Typography variant="h4" component="div" mb="20px">
                  {formatCurrency(data.item.price)}
                </Typography>
                <Button variant="contained" fullWidth>Comprar</Button>
              </Grid>
            </StyledItemDataGrid>
            <StyledItemDescriptionGrid>
              <Grid item xs={12}>
                <Typography variant="h5" component="div" pb={2}>
                  Descripción del producto
                </Typography>
                <Typography variant="body2" component="div">
                  {data.item.description.length > 0 ? data.item.description : "No existe descripción para este producto"}
                </Typography>
              </Grid>
            </StyledItemDescriptionGrid>
          </>
        )}
      </StyledItemContainer>
    </>
  );
};

export default Item;
