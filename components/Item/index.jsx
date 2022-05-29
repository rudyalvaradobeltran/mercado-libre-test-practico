import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { itemById } from "../../redux/Item/ItemByIdSlice";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const dispatch = useDispatch();
  const itemByIdResult = useSelector((store) => store.itemById);

  useEffect(() => {
    if (id && !itemByIdResult.loading && !itemByIdResult.error && !('item' in itemByIdResult.data)) {
      dispatch(itemById(id));
    }
  }, [dispatch, id, itemByIdResult]);

  return (
    <>
        {'item' in itemByIdResult.data &&
            <div>
                {itemByIdResult.data.item.title}
            </div>
        }
    </>
  );
}

export default Item;
