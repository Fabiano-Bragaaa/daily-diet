import { ImageProps } from "react-native";
import { Container } from "./styles";

type Props = ImageProps;

export function ImageDiet({ ...rest }: Props) {
  return <Container {...rest} />;
}
