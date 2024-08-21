import { TouchableOpacityProps } from "react-native";
import {
  ButtonActiveStyleProps,
  Container,
  Date,
  Division,
  Dot,
  Food,
} from "./styles";

type Props = TouchableOpacityProps & {
  date: string;
  food: string;
  type: ButtonActiveStyleProps;
};

export function ListFood({ date, food, type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Date> {date} </Date>
      <Division> | </Division>
      <Food>{food}</Food>
      <Dot type={type} />
    </Container>
  );
}
