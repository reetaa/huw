import React from "react";
import { Button } from "./Button";

export const Colors = ({ setColors }) => {
  const generate = (type) => {
    setColors(type);
  };
  return (
    <div>
      <Button type="primary" cb={() => generate("random")}>
        Random
      </Button>
      <Button type="secondary" cb={() => generate("linear")}>
        Linear
      </Button>
    </div>
  );
};
