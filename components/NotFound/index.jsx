import Image from "next/image";
import NotFoundImg from "../../public/not-found.png";
import { texts } from "../../utils/properties";
import { StyledNotFound } from "./styles";

const NotFound = ({ item }) => {
  return (
    <StyledNotFound>
      <Image
        className="notFoundImage"
        src={NotFoundImg}
        alt="Not found"
        width="386"
        height="386"
      />
      <span>
        {item === "product"
          ? texts.notFoundProduct
          : item === "search"
          ? texts.notFoundSearch
          : texts.notFoundPage}
      </span>
    </StyledNotFound>
  );
};

export default NotFound;
