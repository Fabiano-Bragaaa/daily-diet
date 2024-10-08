import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonWidhtPropsStyle = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonWidhtPropsStyle;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: ${({ type }) => (type === "PRIMARY" ? "100%" : "60%")};
  height: 60px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
