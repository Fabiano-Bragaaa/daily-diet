import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 24px;
`;

export const TitleNew = styled.Text`
  margin-bottom: 10px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_500};
  `}
`;
