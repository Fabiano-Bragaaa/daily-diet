import { View } from "react-native";
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
} from "./styles";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";

type RouteParams = RouteProp<ReactNavigation.RootParamList, "MealDetails">;

export function MealDetail() {
  const navigation = useNavigation();

  const route = useRoute<RouteParams>();
  const { meal } = route.params;

  function handleGoBack() {
    navigation.goBack();
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
          <ButtonCreate type>
            <PencilSimpleLine color="#fff" size={20} />
            <TitleButton type>Editar refeição</TitleButton>
          </ButtonCreate>
          <ButtonCreate type={false}>
            <Trash color="#000" size={20} />
            <TitleButton type={false}>Editar refeição</TitleButton>
          </ButtonCreate>
        </ViewDone>
      </SubContainerEdition>
    </Container>
  );
}
