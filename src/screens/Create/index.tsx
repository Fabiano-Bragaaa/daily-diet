import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HeaderView,
  Icon,
  IconButton,
  SubContainer,
  Title,
  CardViewInput,
  ViewButton,
  ViewDone,
} from "./styles";
import { Input } from "../../components/Input";
import { ViewCardRow } from "../Details/styles";
import { ButtonChoice } from "../../components/ButtonChoice";
import { ButtonCreate } from "../../components/ButtonCreate";

export function Create() {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState<
    "PRIMARY" | "SECONDARY" | null
  >(null);

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

        <ViewButton>
          <ButtonChoice
            title="Sim"
            type="PRIMARY"
            isActive={activeButton === "PRIMARY"}
            onPress={() => setActiveButton("PRIMARY")}
          />
          <ButtonChoice
            title="Não"
            type="SECONDARY"
            isActive={activeButton === "SECONDARY"}
            onPress={() => setActiveButton("SECONDARY")}
          />
        </ViewButton>
        <ViewDone>
          <ButtonCreate title="Cadastrar refeição" />
        </ViewDone>
      </SubContainer>
    </Container>
  );
}
