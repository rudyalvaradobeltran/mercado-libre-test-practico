import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { itemSearch } from "../../redux/Item/ItemSearchSlice";
import ResultsItem from "../ResultsItem";
import Breadcrumbs from "../Breadcrumbs";
import NotFound from "../NotFound";
import Spinner from "../Spinner";
import { StyledBreadcrumbContainer, StyledResultsContainer } from "./styles";

const Results = () => {
  const [routeState, setRouteState] = useState("unset");
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.itemSearch);

  useEffect(() => {
    if (
      router.asPath === "/items" ||
      (Object.keys(router.query).length === 1 && !("search" in router.query))
    ) {
      setRouteState("invalid");
      return;
    }

    if (!loading && !error && !("items" in data)) {
      let search = router.asPath.split("=");
      search = search[search.length - 1];
      dispatch(itemSearch(search));
    }

    setRouteState("valid");
  }, [data, dispatch, error, loading, router.asPath, router.query]);

  return (
    <>
      <>{routeState === "invalid" && <NotFound />}</>
      {routeState === "valid" && (
        <>
          {loading && <Spinner />}
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
      )}
    </>
  );
};

export default Results;
