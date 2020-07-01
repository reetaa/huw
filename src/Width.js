import React from "react";
import { Button } from "./Button";

export const Width = ({ width, setWidth }) => {
  // Valid widths are 32, 64, 128, 256
  const increment = () => {
    if (width < 256) {
      setWidth(width * 2);
    }
  };
  const decrement = () => {
    if (width > 32) {
      setWidth(width / 2);
    }
  };
  return (
    <div>
      <Button type="primary" cb={increment}>
        Width +
      </Button>
      <Button type="secondary" cb={decrement}>
        Width -
      </Button>
    </div>
  );
};
