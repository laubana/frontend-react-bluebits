import React from "react";
import { DividerProps } from "./Divider.props";
import { Container } from "./Divider.style";

const DividerComponent = (props: DividerProps): JSX.Element => {
  const {} = props;

  return <Container />;
};

export default React.memo(DividerComponent);
