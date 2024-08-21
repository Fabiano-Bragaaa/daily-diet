import styled, { css } from "styled-components/native";

export type TextStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: TextStyleProps;
};

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const HighlightedText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Details = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
