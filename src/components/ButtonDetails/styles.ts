import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 120px;

  margin-top: 25px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Details = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 28,
}))`
  position: absolute;
  z-index: 99;
  right: 2%;
  top: 10%;
`;
