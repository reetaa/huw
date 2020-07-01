import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  color: ${(props) => (props.type === "primary" ? "red" : "blue")};
  font-size: 1em;
  font-weight: 300;
  border: 0;
  padding: 1em 2em;
  margin: 0.5em;
  background: rgba(0, 0, 0, 0.1);
`;

export const Button = ({ type, cb, children }) => {
  return (
    <ButtonStyles type={type} onClick={cb}>
      {children}
    </ButtonStyles>
  );
};
