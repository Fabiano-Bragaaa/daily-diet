import { TextInputProps } from "react-native";
import { Container, Title, InputCreate, LargeStypeProps } from "./styles";

type Props = TextInputProps & {
  title: string;
  type?: LargeStypeProps;
};

export function Input({ title, type = "MEDIUM", ...rest }: Props) {
  return (
    <Container>
      <Title> {title} </Title>
      <InputCreate type={type} {...rest} />
    </Container>
  );
}
