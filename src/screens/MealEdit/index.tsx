import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  HeaderView,
  Icon,
  IconButton,
  SubContainer,
  Title,
  CardViewInput,
  ViewButton,
  ViewDone,
} from "../Create/styles";
import { Input } from "../../components/Input";
import { ViewCardRow } from "../Details/styles";
import { ButtonChoice } from "../../components/ButtonChoice";
import { ButtonCreate } from "../../components/ButtonCreate";
import { FoodCreate } from "../../storage/Food/foodCreate";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Meal } from "../../storage/Food/foodGetAll";
import { Container } from "./styles";
import { FoodEdit } from "../../storage/Food/foodEdit";

type RouteParams = {
  meal: Meal;
};

export function MealEdit() {
  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const [activeButton, setActiveButton] = useState(meal.inDiet);
  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description);
  const [date, setDate] = useState(meal.date);
  const [time, setTime] = useState(meal.time);

  const [loading, setLoading] = useState(false);

  async function handleEditMeal() {
    if (name.trim() === "" || description.trim() === "") {
      Alert.alert(
        "Preencha os campos.",
        "Você não pode deixar os campos vazios."
      );
    }

    const updatedMeal: Meal = {
      id: meal.id,
      name,
      description,
      date,
      time,
      inDiet: activeButton,
    };

    try {
      await FoodEdit(updatedMeal);
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container type={meal.inDiet}>
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
              isActive={activeButton === true}
              onPress={() => setActiveButton(true)}
            />
            <ButtonChoice
              title="Não"
              type="SECONDARY"
              isActive={activeButton === false}
              onPress={() => setActiveButton(false)}
            />
          </ViewButton>
          <ViewDone>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <ButtonCreate
                title="cadastrar refeição"
                onPress={handleEditMeal}
              />
            )}
          </ViewDone>
        </ScrollView>
      </SubContainer>
    </Container>
  );
}
