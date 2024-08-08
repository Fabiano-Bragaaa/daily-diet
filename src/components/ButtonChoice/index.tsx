import React from "react";
import { TouchableOpacityProps, View } from "react-native";
import { Container, Dot, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
  isActive?: boolean;
};

export function ButtonChoice({
  title,
  type = "PRIMARY",
  isActive = false,
  ...rest
}: Props) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Dot type={type} isActive={isActive} />
      <Title> {title} </Title>
    </Container>
  );
}
