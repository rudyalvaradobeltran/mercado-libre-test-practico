import React from "react";
import Image from "next/image";
import SVG from "../../public/spinner.svg";
import { StyledSpinner } from "./styles";

const Spinner = () => {
  return (
    <StyledSpinner>
      <Image src={SVG} alt="spinner" width="40" height="40" />
    </StyledSpinner>
  );
};

export default Spinner;
