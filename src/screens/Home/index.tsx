import { useCallback, useEffect, useState } from "react";

import { Container, Title, TitleNew } from "./styles";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { ButtonCreate } from "../../components/ButtonCreate";
import ButtonDetails from "../../components/ButtonDetails";
import Header from "../../components/Header";
import { ListFood } from "../../components/ListFood";
import { SectionList, Text } from "react-native";
import { FoodGetAll, Meal } from "../../storage/Food/foodGetAll";

type SectionDate = {
  title: string;
  data: Meal[];
};

export function Home() {
  const navigation = useNavigation();
  const [percentage, setPercentage] = useState("90,86%");

  const [section, setSection] = useState<SectionDate[]>([]);

  const [foods, setFoods] = useState<Meal[]>([]);

  async function foodsList() {
    try {
      const data = await FoodGetAll();
      setFoods(data ? data : []);
      updateSections(data ? data : []);
    } catch (err) {
      console.log(err);
    }
  }

  function updateSections(foods: Meal[]) {
    const sections: SectionDate[] = [];

    foods.forEach((meal) => {
      const existingSection = sections.find(
        (section) => section.title === meal.date
      );

      if (existingSection) {
        // Se a seção já existir, adicione a nova refeição à data existente
        existingSection.data.push(meal);
      } else {
        // Se a seção não existir, crie uma nova
        sections.push({
          title: meal.date,
          data: [meal],
        });
      }
    });

    setSection(sections);
  }

  function handleDetails() {
    navigation.navigate("Details", { percentage });
  }

  function handleCreate() {
    navigation.navigate("Create");
  }

  function handleFoodDetails(meal: Meal) {
    navigation.navigate("MealDetails", { meal });
  }

  useFocusEffect(
    useCallback(() => {
      foodsList(); // Recarrega a lista de refeições
    }, [])
  );

  return (
    <Container>
      <Header />
      <ButtonDetails title={percentage} onPress={handleDetails} />
      <TitleNew>Refeições</TitleNew>
      <ButtonCreate title="Nova refeição" onPress={handleCreate} />
      <SectionList
        sections={section.reverse()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListFood
            date={item.time}
            food={item.name}
            type={item.inDiet}
            onPress={() => handleFoodDetails(item)}
          />
        )}
        renderSectionHeader={({ section }) => <Title>{section.title}</Title>}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
