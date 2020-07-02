import React from "react";
import { Button } from "./Button";

export const Scale = ({ scale, setScale }) => {
  const increment = () => {
    if (scale < 25) {
      setScale(scale + 2);
    }
  };
  const decrement = () => {
    if (scale > 2) {
      setScale(scale - 2);
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
