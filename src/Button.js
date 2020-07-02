import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  color: ${(props) => (props.type === "primary" ? "red" : "blue")};
  font-size: 1em;
  font-weight: 300;
  padding: 1em 2em;
  margin: 0.5em;
  background: rgba(255, 255, 255, 0.9);
`;

export const Button = ({ type, cb, children }) => {
  return (
    <ButtonStyles type={type} onClick={cb}>
      {children}
    </ButtonStyles>
  );
};
