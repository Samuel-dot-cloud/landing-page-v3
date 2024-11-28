import React from "react";
import { StyledButton } from "./back-button-elements";
import { TiArrowBack } from "react-icons/ti";

const BackButton: React.FC = () => {
  return (
    <StyledButton href="/">
      <TiArrowBack size={20} />
      <span>Back</span>
    </StyledButton>
  );
};

export default BackButton;
