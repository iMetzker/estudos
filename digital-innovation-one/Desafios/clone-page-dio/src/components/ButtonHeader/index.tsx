import React from "react";
import { ButtonContainerHeader } from "./styles";
import { IButtonHeader } from "./types";

const ButtonHeader = ({ title, onClick }:IButtonHeader) => {
  return (
    <ButtonContainerHeader onClick={onClick}>{title}</ButtonContainerHeader>
  );
};

export { ButtonHeader };
