import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type ViewStyleProps = boolean;

type Props = {
  type: ViewStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
