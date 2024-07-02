import React from "react";
import { ButtonProps } from "./Button.props";
import { Button } from "./Button.style";
import Text from "../Text";

const ButtonComponent = ({
  sizing = "medium",
  coloring = "blue",
  block,
  onClick,
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
      <Text coloring="white" variant="titleMd" style={{ fontWeight: 500 }}>
        {text}
      </Text>
    </Button>
  );
};

export default React.memo(ButtonComponent);
