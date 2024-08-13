import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonActiveStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonActiveStyleProps;
  isActive: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 60px;
  width: 48%;

  justify-content: center;
  align-items: center;
  flex-direction: row; /* Alinha o ponto e o texto em linha */

  border-radius: 10px;

  background-color: ${({ theme, isActive, type }) =>
    isActive
      ? type === "PRIMARY"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_100};

  border: 1px solid
    ${({ theme, isActive, type }) =>
      isActive
        ? type === "PRIMARY"
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_400};
`;

export const Dot = styled.View<Props>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px; /* Espaçamento entre o ponto e o texto */
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
