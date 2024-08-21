import { useCallback, useState } from "react";
import { Container, Title, TitleNew } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ButtonCreate } from "../../components/ButtonCreate";
import ButtonDetails from "../../components/ButtonDetails";
import Header from "../../components/Header";
import { ListFood } from "../../components/ListFood";
import { SectionList, Text, TouchableOpacity } from "react-native";
import { FoodGetAll, Meal } from "../../storage/Food/foodGetAll";

type SectionDate = {
  title: string;
  data: Meal[];
};

export function Home() {
  const navigation = useNavigation();

  const [percentage, setPercentage] = useState(0);
  const [section, setSection] = useState<SectionDate[]>([]);
  const [selectedSection, setSelectedSection] = useState<Meal[]>([]);
  const [maiorSequencia, setMaiorSequencia] = useState<number>(0);
  const [totalRefeicoes, setTotalRefeicoes] = useState(0);
  const [refeicoesDentroDieta, setRefeicoesDentroDieta] = useState(0);
  const [refeicoesForaDieta, setRefeicoesForaDieta] = useState(0);

  async function foodsList() {
    try {
      const data = await FoodGetAll();
      updateSections(data ? data : []);
    } catch (err) {
      console.log(err);
    }
  }

  function calculateDietMetrics(meals: Meal[]) {
    let maiorSequencia = 0;
    let sequenciaAtual = 0;

    meals.forEach((meal) => {
      if (meal.inDiet) {
        sequenciaAtual++;
        if (sequenciaAtual > maiorSequencia) {
          maiorSequencia = sequenciaAtual;
        }
      } else {
        sequenciaAtual = 0;
      }
    });

    setMaiorSequencia(maiorSequencia);
  }

  function updateSections(foods: Meal[]) {
    const sections: SectionDate[] = [];
    let totalMeals = 0;
    let inDietMeals = 0;

    foods.forEach((meal) => {
      const existingSection = sections.find(
        (section) => section.title === meal.date
      );

      if (existingSection) {
        existingSection.data.push(meal);
      } else {
        sections.push({
          title: meal.date,
          data: [meal],
        });
      }

      totalMeals++;
      if (meal.inDiet) {
        inDietMeals++;
      }
    });

    // Inverter os itens dentro de cada seção
    sections.forEach((section) => {
      section.data.reverse();
    });

    setSection(sections);

    // Atualize os totais
    setTotalRefeicoes(totalMeals);
    setRefeicoesDentroDieta(inDietMeals);
    setRefeicoesForaDieta(totalMeals - inDietMeals);

    // Calcular métricas gerais com a lista completa
    calculateDietMetrics(foods);

    if (sections.length > 0) {
      const firstSection = sections[0].data;
      setSelectedSection(firstSection);
      // Calcular a porcentagem apenas para a primeira seção
      calculateDietPercentageForSection(firstSection);
    }
  }

  function calculateDietPercentageForSection(meals: Meal[]) {
    const totalMeals = meals.length;
    const inDietMeals = meals.filter((meal) => meal.inDiet).length;

    if (totalMeals > 0) {
      setPercentage((inDietMeals / totalMeals) * 100);
    } else {
      setPercentage(0);
    }
  }

  function handleSectionSelect(selectedMeals: Meal[]) {
    setSelectedSection(selectedMeals);
    calculateDietPercentageForSection(selectedMeals); // Recalcula a porcentagem para a seção selecionada
  }

  function handleDetails() {
    navigation.navigate("Details", {
      percentage,
      maxSequence: maiorSequencia,
      totalMeals: totalRefeicoes,
      inDietMeals: refeicoesDentroDieta,
      outOfDietMeals: refeicoesForaDieta,
    });
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
      <ButtonDetails
        title={`${percentage.toFixed(0)}%`}
        onPress={handleDetails}
        type={percentage < 50 ? "SECONDARY" : "PRIMARY"}
      />
      <TitleNew>Refeições</TitleNew>
      <ButtonCreate title="Nova refeição" onPress={handleCreate} />
      <SectionList
        sections={section.reverse()} // Inverte a ordem das seções, se necessário
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListFood
            date={item.time}
            food={item.name}
            type={item.inDiet}
            onPress={() => handleFoodDetails(item)}
          />
        )}
        renderSectionHeader={({ section }) => (
          <TouchableOpacity onPress={() => handleSectionSelect(section.data)}>
            <Title>{section.title}</Title>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
