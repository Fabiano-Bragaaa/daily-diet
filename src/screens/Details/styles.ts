import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";

type IconButtonStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: IconButtonStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ type, theme }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const PercentView = styled.View<Props>`
  height: 20%;
  justify-content: center;
  align-items: center;

  background-color: ${({ type, theme }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  z-index: 99;
  left: 5%;
  top: 8%;
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 28,
}))``;

export const Percentage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const DetailsText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const SubContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-right-radius: 25px;
  border-top-left-radius: 25px;

  align-items: center;
  padding: 24px;
`;

export const Statistics = styled.Text`
  margin-bottom: 10px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ViewCardRow = styled.View`
  flex-direction: row;
`;

export const CardContainer = styled.View`
  gap: 12px;
  width: 48.5%;
  flex-direction: row;
  justify-content: center;
`;
