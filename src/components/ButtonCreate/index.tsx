import { TouchableOpacityProps, View } from "react-native";
import { ButtonWidhtPropsStyle, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonWidhtPropsStyle;
};

export function ButtonCreate({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      <Title> {title} </Title>
    </Container>
  );
}
