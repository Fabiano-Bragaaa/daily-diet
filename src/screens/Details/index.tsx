import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  SubContainer,
  DetailsText,
  Percentage,
  PercentView,
  Icon,
  ButtonIcon,
  Statistics,
  ViewCardRow,
  CardContainer,
} from "./styles";
import { Card } from "../../components/Card";

type DetailsProps = {
  percentage: number;
  maxSequence: number;
  totalMeals: number;
  inDietMeals: number;
  outOfDietMeals: number;
};

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { percentage, inDietMeals, maxSequence, outOfDietMeals, totalMeals } =
    route.params as DetailsProps;

  const iconType = percentage < 50 ? "SECONDARY" : "PRIMARY";

  return (
    <Container type={iconType}>
      <PercentView type={iconType}>
        <ButtonIcon onPress={() => navigation.navigate("Home")}>
          <Icon type={iconType} />
        </ButtonIcon>
        <Percentage>{`${percentage.toFixed(0)}%`}</Percentage>
        <DetailsText>Dentro das refeições da dieta</DetailsText>
      </PercentView>

      <SubContainer>
        <Statistics>Estatísticas gerais</Statistics>
        <Card
          title={maxSequence.toString()}
          details="melhor sequência de pratos dentro da dieta"
        />
        <Card title={totalMeals.toString()} details="refeições registradas" />
        <ViewCardRow>
          <CardContainer>
            <Card
              title={inDietMeals.toString()}
              details="refeições dentro da dieta"
              type="PLUS"
            />
            <Card
              title={outOfDietMeals.toString()}
              details="refeições fora da dieta"
              type="SECONDARY"
            />
          </CardContainer>
        </ViewCardRow>
      </SubContainer>
    </Container>
  );
}
