import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { itemSearch } from "../../redux/Item/ItemSearchSlice";

const Results = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const itemsSearchResults = useSelector((store) => store.itemSearch);

  useEffect(() => {
    if (!('items' in itemsSearchResults.data)) {
      const path = router.asPath.split('=');
      dispatch(itemSearch(path[path.length-1]));
    }
  }, [dispatch, itemsSearchResults, router.asPath]);

  return (
    <>
      {JSON.stringify(itemsSearchResults.data.items) &&
        itemsSearchResults.data.items.map((item) => {
          return (
            <div key={item.id}>
              {item.title}
            </div>
          )
        })}
    </>
  );
};

export default Results;
