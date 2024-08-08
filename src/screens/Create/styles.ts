import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const HeaderView = styled.View`
  height: 12%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  left: 5%;
  z-index: 1;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_700,
  size: 28,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const SubContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-right-radius: 25px;
  border-top-left-radius: 25px;

  padding: 24px;
`;

export const CardViewInput = styled.View`
  gap: 12px;
  flex-direction: row;
  width: 48.5%;
`;

export const ViewButton = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const ViewDone = styled.View`
  width: 100%;
  margin-top: auto; /* Empurra o botão para o final do container */
  padding-top: 16px; /* Espaçamento superior para separar o botão dos campos acima */
  padding-bottom: 16px; /* Espaçamento inferior para evitar que o botão fique colado na borda da tela */
`;
