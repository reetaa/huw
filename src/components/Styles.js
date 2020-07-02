import styled from "styled-components";

export const HuwStyles = styled.div`
  position: fixed;
`;

export const ColorStyles = styled.h3.attrs((props) => ({
  style: {
    color: props.color,
    background: "rgba(255, 255, 255, 0.9)",
    padding: "1em",
  },
}))``;

export const ButtonStyles = styled.button`
  color: ${(props) => (props.type === "primary" ? "red" : "blue")};
  font-size: 1em;
  font-weight: 300;
  padding: 1em 2em;
  margin: 0.5em;
  background: rgba(255, 255, 255, 0.9);
`;
