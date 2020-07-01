import React from "react";
import { Button } from "./Button";

export const Scale = ({ pixel, setPixel }) => {
  const increment = () => {
    if (pixel < 25) {
      setPixel(pixel + 2);
    }
  };
  const decrement = () => {
    if (pixel > 2) {
      setPixel(pixel - 2);
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
