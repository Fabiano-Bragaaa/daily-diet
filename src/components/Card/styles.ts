import styled, { css } from "styled-components/native";

export type CardStyleProps = "PRIMARY" | "SECONDARY" | "PLUS";

type Props = {
  type: CardStyleProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  height: 120px;

  justify-content: center;
  align-items: center;

  border-radius: 10px;

  margin-bottom: 15px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" // Se `type` for "PRIMARY"
      ? theme.COLORS.GRAY_200 // Use `theme.COLORS.GRAY_200`
      : type === "PLUS" // Senão, se `type` for "PLUS"
      ? theme.COLORS.GREEN_LIGHT // Use `theme.COLORS.GREEN_LIGHT`
      : // Senão
        theme.COLORS
          .RED_LIGHT // Use `theme.COLORS.RED_LIGHT`
  };
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const DetailsCard = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_500};
  `}
`;
