import { Text, View } from "react-native";
import {
  Container,
  HeaderView,
  Icon,
  IconButton,
  SubContainer,
  Title,
  CardViewInput,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/Input";
import { ViewCardRow } from "../Details/styles";

export function Create() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <HeaderView>
        <IconButton onPress={handleGoBack}>
          <Icon />
        </IconButton>
        <Title>Nova Refeição</Title>
      </HeaderView>
      <SubContainer>
        <Input title="Nome" />
        <Input title="Descrição" type="LARGE" />

        <ViewCardRow>
          <CardViewInput>
            <Input title="Data" />
            <Input title="Hora" />
          </CardViewInput>
        </ViewCardRow>
      </SubContainer>
    </Container>
  );
}
