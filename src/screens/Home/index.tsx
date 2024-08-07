import { useState } from "react";

import { Container, TitleNew } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { ButtonCreate } from "../../components/ButtonCreate";
import ButtonDetails from "../../components/ButtonDetails";
import Header from "../../components/Header";

export function Home() {
  const navigation = useNavigation();
  const [percentage, setPercentage] = useState<string>("90,86%");

  function handleDetails() {
    navigation.navigate("Details", { percentage });
  }

  function handleCreate() {
    navigation.navigate("Create");
  }

  return (
    <Container>
      <Header />
      <ButtonDetails title={percentage} onPress={handleDetails} />
      <TitleNew>Refeições</TitleNew>
      <ButtonCreate title="Nova refeição" onPress={handleCreate} />
    </Container>
  );
}
