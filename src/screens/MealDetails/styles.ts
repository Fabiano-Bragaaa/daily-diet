import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type ViewStyleProps = boolean;

type Props = {
  type: ViewStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const TitleHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const SubContainerEdition = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-right-radius: 25px;
  border-top-left-radius: 25px;

  padding: 24px;
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const DateAndTime = styled.Text`
  margin-top: 35px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Time = styled.Text`
  margin-top: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const ViewDiet = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  height: 45px;
  width: 50%;

  margin: 25px 0;

  border-radius: 20px;

  justify-content: space-evenly;
  align-items: center;

  flex-direction: row;
`;

export const Dot = styled.View<Props>`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: ${({ theme, type }) =>
    type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const DietText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_500};
  `}
`;

export const ViewDone = styled.View`
  width: 100%;
  margin-top: auto; /* Empurra o botão para o final do container */
  padding-top: 16px; /* Espaçamento superior para separar o botão dos campos acima */
  padding-bottom: 16px; /* Espaçamento inferior para evitar que o botão fique colado na borda da tela */
`;

export const ButtonCreate = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 60px;

  gap: 10px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-top: 15px;

  background-color: ${({ theme, type }) =>
    type ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};

  border-radius: 8px;
  border-width: ${({ type }) => (type ? 0 : "2px")};
  border-color: ${({ type, theme }) =>
    type ? "transparent" : theme.COLORS.GRAY_500};
`;

export const TitleButton = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
  `}
`;
