import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type LargeStypeProps = "MEDIUM" | "LARGE";

type Props = {
  type: LargeStypeProps;
};

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  margin-bottom: 5px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_500};
  `}
`;

export const InputCreate = styled(TextInput)<Props>`
  height: ${({ type }) => (type === "LARGE" ? "150px" : "50px")};

  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-width: 2px;
  border-radius: 10px;

  padding: 15px;
  margin-bottom: 15px;

  text-align-vertical: top;
`;
