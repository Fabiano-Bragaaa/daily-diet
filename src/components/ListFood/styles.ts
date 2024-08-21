import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonActiveStyleProps = boolean;

type Props = {
  type: ButtonActiveStyleProps;
};
export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;

  flex-direction: row;

  align-items: center;

  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  border: 1px ${({ theme }) => theme.COLORS.GRAY_400};

  gap: 4px;
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Division = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Food = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Dot = styled.View<Props>`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${({ theme, type }) =>
    type ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  margin-right: 8px;
`;
