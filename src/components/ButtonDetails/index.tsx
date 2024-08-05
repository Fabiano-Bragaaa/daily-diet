import { View } from "react-native";
import {
  ButtonTypeStyleProps,
  Container,
  Details,
  Icon,
  Title,
} from "./styles";

type Props = {
  title: string;
  type?: ButtonTypeStyleProps;
};

export default function ButtonDetails({
  title,
  type = "PRIMARY",
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} />
      <Title>{title}</Title>
      <Details>das refeições dentro da dieta</Details>
    </Container>
  );
}
