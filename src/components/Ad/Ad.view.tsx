import React from "react";
import { AdProps } from "./Ad.props";
import { Container, Image } from "./Ad.style";
import Text from "../Text";

const AdComponent = (props: AdProps): JSX.Element => {
  const { imageUrl } = props;

  return (
    <Container>
      {imageUrl ? (
        <Image src={imageUrl} />
      ) : (
        <Text
          style={{
            color: "rgba(168, 186, 204, 1)",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Ad Space
        </Text>
      )}
    </Container>
  );
};

export default React.memo(AdComponent);
