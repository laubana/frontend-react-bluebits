import React from "react";
import { ButtonProps } from "./Button.props";
import { Button } from "./Button.style";
import Text from "../Text";

const ButtonComponent = ({
  block,
  coloring = "blue",
  leftComponent,
  onClick,
  sizing = "medium",
  text,
}: ButtonProps): JSX.Element => {
  return (
    <Button
      type="button"
      sizing={sizing}
      coloring={coloring}
      block={block}
      onClick={onClick}
    >
      {leftComponent && leftComponent}
      <Text
        coloring={coloring === "blue" ? "white" : "blue"}
        variant="titleMd"
        style={{ fontWeight: 500 }}
      >
        {text}
      </Text>
    </Button>
  );
};

export default React.memo(ButtonComponent);
