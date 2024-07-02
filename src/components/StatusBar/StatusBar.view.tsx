import React from "react";
import { StatusBarProps } from "./StatusBar.props";
import { Container } from "./StatusBar.style";
import Text from "../Text";
import { Battery, Signal, Wifi } from "../SVG";

const StatusBarComponent = (props: StatusBarProps): JSX.Element => {
  const {} = props;

  return (
    <Container>
      <div>
        <Text style={{ fontSize: "15px", fontWeight: 700 }}>8:00</Text>
      </div>
      <div style={{ alignItems: "center", display: "flex", gap: "4px" }}>
        <Signal />
        <Wifi />
        <Battery />
      </div>
    </Container>
  );
};

export default React.memo(StatusBarComponent);
