import {
  Container,
  Details,
  HighlightedText,
  TextStyleProps,
  Title,
} from "./styles";

type Props = {
  title: string;
  type?: TextStyleProps;
};

export function Highlight({ title, type = "PRIMARY" }: Props) {
  return (
    <Container>
      <Title type={type}> {title} </Title>
    </Container>
  );
}
