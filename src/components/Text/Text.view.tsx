import React from "react";
import { TextProps } from "./Text.props";
import { Text } from "./Text.style";

const TextComponent = ({
  alignment = "left",
  children,
  coloring = "black",
  style,
  variant = "body",
}: TextProps): JSX.Element => {
  return (
    <Text
      alignment={alignment}
      coloring={coloring}
      style={style}
      variant={variant}
    >
      {children}
    </Text>
  );
};

export default React.memo(TextComponent);
