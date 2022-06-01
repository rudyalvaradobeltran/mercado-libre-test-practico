import Image from "next/image";
import NotFoundImg from "../../public/not-found.png";
import { texts } from "../../utils/properties";
import { StyledNotFound } from "./styles";

const NotFound = () => {
  return (
    <StyledNotFound>
      <Image className="notFoundImage" src={NotFoundImg} alt="Not found" width="386" height="386" />
      <span>{texts.notFound}</span>
    </StyledNotFound>
  );
};

export default NotFound;
