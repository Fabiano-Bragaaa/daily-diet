import { View } from "react-native";
import { CardStyleProps, Container, DetailsCard, Title } from "./styles";
import { Details } from "../../screens/Details";

type Props = {
  type?: CardStyleProps;
  title: string;
  details: string;
};

export function Card({ title, details, type = "PRIMARY" }: Props) {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <DetailsCard> {details} </DetailsCard>
    </Container>
  );
}
