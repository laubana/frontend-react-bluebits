import React from "react";
import { CardProps } from "./Card.props";
import { Container, IconWrapper, TextWrapper } from "./Card.style";
import Text from "../Text";

const CardComponent = (props: CardProps): JSX.Element => {
  const { content, icon, onClick, title } = props;

  return (
    <Container onClick={onClick}>
      <IconWrapper>{icon}</IconWrapper>
      <TextWrapper>
        <Text variant="titleSm">{title}</Text>
        <Text coloring="grey">{content}</Text>
      </TextWrapper>
    </Container>
  );
};

export default React.memo(CardComponent);
