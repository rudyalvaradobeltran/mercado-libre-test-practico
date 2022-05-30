import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { itemSearch } from "../../redux/Item/ItemSearchSlice";
import ResultsItem from "../ResultsItem";
import Breadcrumbs from "../Breadcrumbs";
import { StyledBreadcrumbContainer, StyledResultsContainer } from "./styles";

const Results = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.itemSearch);

  useEffect(() => {
    if (!loading && !error && !("items" in data)) {
      const path = router.asPath.split("=");
      dispatch(itemSearch(path[path.length - 1]));
    }
  }, [data, dispatch, error, loading, router.asPath]);

  return (
    <>
      {data.categories && (
        <StyledBreadcrumbContainer maxWidth="md">
          <Breadcrumbs categories={data.categories} />
        </StyledBreadcrumbContainer>
      )}
      <StyledResultsContainer maxWidth="md">
        {JSON.stringify(data.items) &&
          data.items.map((item) => {
            return <ResultsItem key={item.title} item={item} />;
          })}
      </StyledResultsContainer>
    </>
  );
};

export default Results;
