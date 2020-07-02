import React from "react";
import { ButtonStyles } from "./Styles";

export const Button = ({ type, cb, children }) => {
  return (
    <ButtonStyles type={type} onClick={cb}>
      {children}
    </ButtonStyles>
  );
};
