import React from "react";
import { Button } from "./Button";

export const Scale = ({ size, setSize }) => {
  const increment = () => {
    if (size < 25) {
      setSize(size + 2);
    }
  };
  const decrement = () => {
    if (size > 2) {
      setSize(size - 2);
    }
  };
  return (
    <div>
      <Button type="primary" cb={increment}>
        Scale +
      </Button>
      <Button type="secondary" cb={decrement}>
        Scale -
      </Button>
    </div>
  );
};
