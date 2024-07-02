import React from "react";
import { LabelProps } from "./Label.props";
import { Container } from "./Label.style";
import Text from "../Text";

const LabelComponent = (props: LabelProps): JSX.Element => {
  const { status } = props;

  return (
    <Container coloring={status === "pending" ? "red" : "red"}>
      <Text coloring="red" variant="titleMd" style={{ fontWeight: 700 }}>
        {`${status.slice(0, 1).toUpperCase()}${status.slice(1)}`}
      </Text>
    </Container>
  );
};

export default React.memo(LabelComponent);
