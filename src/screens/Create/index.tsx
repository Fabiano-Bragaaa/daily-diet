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
import { FoodCreate } from "../../storage/Food/foodCreate";
import { ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";

export function Create() {
  const navigation = useNavigation();

  const [activeButton, setActiveButton] = useState<
    "PRIMARY" | "SECONDARY" | null
  >(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [loading, setLoading] = useState(false);

  async function DoneFood() {
    setLoading(true);

    console.log("Name:", name);
    console.log("Description:", description);
    console.log("Date:", date);
    console.log("Time:", time);

    if (
      name.trim() === "" ||
      description.trim() === "" ||
      date.trim() === "" ||
      time.trim() === ""
    ) {
      setLoading(false);
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newMeal = {
      id: String(new Date().getTime()),
      name,
      description,
      date,
      time,
      inDiet: activeButton === "PRIMARY" ? true : false,
    };

    try {
      await FoodCreate(newMeal);
      setLoading(false);

      navigation.navigate(
        activeButton === "PRIMARY" ? "FinishCreate" : "FinishCreateNo"
      );
    } catch (error) {
      console.error("Erro ao salvar a refeição:", error);
      alert("Não foi possível salvar a refeição.");
    }
  }

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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Input title="Nome" value={name} onChangeText={setName} />
          <Input
            title="Descrição"
            value={description}
            onChangeText={setDescription}
            type="LARGE"
          />
          <ViewCardRow>
            <CardViewInput>
              <Input
                title="Data"
                value={date}
                onChangeText={setDate}
                keyboardType="numeric"
              />
              <Input
                title="Hora"
                value={time}
                onChangeText={setTime}
                keyboardType="numeric"
              />
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
            {loading ? (
              <ActivityIndicator />
            ) : (
              <ButtonCreate title="cadastrar refeição" onPress={DoneFood} />
            )}
          </ViewDone>
        </ScrollView>
      </SubContainer>
    </Container>
  );
}
