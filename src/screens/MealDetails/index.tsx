import { Modal, StatusBar, View } from "react-native";
import { HeaderView, IconButton, Icon } from "../Create/styles";
import {
  Container,
  Description,
  SubContainerEdition,
  Title,
  TitleHeader,
  DateAndTime,
  Time,
  ViewDiet,
  Dot,
  DietText,
  ViewDone,
  ButtonCreate,
  TitleButton,
  ModalContainer,
  ViewContent,
  TitleContent,
} from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { Meal } from "../../storage/Food/foodGetAll";
import { FoodDelete } from "../../storage/Food/foodDelete";
import { useState } from "react";

type RouteParams = {
  meal: Meal;
};

export function MealDetail() {
  const [open, setOpen] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoEditMeal() {
    navigation.navigate("MealEdit", { meal });
  }

  async function handleDelete() {
    try {
      await FoodDelete(meal.id);
      navigation.navigate("Home");
    } catch (err) {
      console.log("erro ao deletar a comida", err);
    }
  }

  function handleModal() {
    setOpen(!open);
  }

  return (
    <Container type={meal.inDiet}>
      <HeaderView>
        <IconButton onPress={handleGoBack}>
          <Icon />
        </IconButton>
        <TitleHeader>Refeição</TitleHeader>
      </HeaderView>
      <SubContainerEdition>
        <Title>{meal.name}</Title>
        <Description>{meal.description}</Description>

        <DateAndTime>Data e Hora</DateAndTime>
        <Time>{`${meal.date} às ${meal.time}`}</Time>
        <ViewDiet>
          <Dot type={meal.inDiet} />
          <DietText>
            {meal.inDiet ? "dentro da dieta" : "fora da dieta"}
          </DietText>
        </ViewDiet>
        <ViewDone>
          <ButtonCreate type large onPress={handleGoEditMeal}>
            <PencilSimpleLine color="#fff" size={20} />
            <TitleButton type>Editar refeição</TitleButton>
          </ButtonCreate>

          <ButtonCreate type={false} large onPress={handleModal}>
            <Trash color="#000" size={20} />
            <TitleButton type={false}>Excluir refeição</TitleButton>
          </ButtonCreate>
        </ViewDone>
      </SubContainerEdition>
      <Modal
        visible={open}
        animationType="fade"
        transparent
        onRequestClose={() => {
          // Reabilitar a translucência da StatusBar quando o modal fechar
          StatusBar.setTranslucent(true);
        }}
        onShow={() => {
          // Remover a translucência da StatusBar quando o modal abrir
          StatusBar.setTranslucent(false);
        }}
      >
        <ModalContainer>
          <StatusBar
            barStyle={"dark-content"}
            backgroundColor={"rgba(34,34,34, 0.4)"}
            translucent
          />
          <ViewContent>
            <TitleContent>
              Deseja realmente excluir o registro da refeição?
            </TitleContent>
            <View
              style={{
                flexDirection: "row",
                gap: 12,
              }}
            >
              <ButtonCreate type={false}>
                <TitleButton type={false} onPress={handleModal}>
                  Cancelar
                </TitleButton>
              </ButtonCreate>
              <ButtonCreate type onPress={handleDelete}>
                <TitleButton type>Sim, exlcluir</TitleButton>
              </ButtonCreate>
            </View>
          </ViewContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
