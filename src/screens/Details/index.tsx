import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  SubContainer,
  DetailsText,
  Percentage,
  PercentView,
  Icon,
  IconButtonStyleProps,
  ButtonIcon,
  Statistics,
  ViewCardRow,
  CardContainer,
} from "./styles";
import { Card } from "../../components/Card";

type PercentageProps = {
  percentage: string;
};

type Props = {
  type?: IconButtonStyleProps;
};

export function Details({ type = "PRIMARY" }: Props) {
  const navigation = useNavigation();
  const route = useRoute();
  const { percentage } = route.params as PercentageProps;
  return (
    <Container>
      <PercentView>
        <ButtonIcon onPress={() => navigation.navigate("Home")}>
          <Icon type={type} />
        </ButtonIcon>
        <Percentage>{percentage}</Percentage>
        <DetailsText>Dentro das refeições da dieta</DetailsText>
      </PercentView>

      <SubContainer>
        <Statistics>Estatísticas gerais</Statistics>
        <Card title="22" details="melhor sequência de pratos dentro da dieta" />
        <Card title="18" details="refeições registradas" />
        <ViewCardRow>
          <CardContainer>
            <Card title="99" details="refeições dentro da dieta" type="PLUS" />
            <Card
              title="10"
              details="refeições fora da dieta"
              type="SECONDARY"
            />
          </CardContainer>
        </ViewCardRow>
      </SubContainer>
    </Container>
  );
}
