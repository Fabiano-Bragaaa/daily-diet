import { useNavigation } from "@react-navigation/native";
import { ButtonCreate } from "../../components/ButtonCreate";
import { Highlight } from "../../components/Highlight";
import { ImageDiet } from "../../components/ImageDiet";

import { Container, Details, HighlightedText } from "../FinishCreate/styles";

export function FinishCreateNo() {
  const navigation = useNavigation();
  return (
    <Container>
      <Highlight title="Que pena!" type="SECONDARY" />
      <Details>
        Você <HighlightedText>saiu da dieta </HighlightedText>dessa vez, mas
        continue se esforçando e não desista!
      </Details>
      <ImageDiet
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/3618/a254/e005132d5769d312c3c5d86330fb0f0d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJArv7T9mHnl08PAF-9FgOMJu9d9ivI1kAjkuVjXsKsNqIViwcC2sUv1IbuUqiBNPStIyLH5YSeGGHtwWJXzsNQ85Yo1x5JTaA2pqWL-7--mIoBNgblLYCmV8vwLBV0ChahaFV8FMHLKXCjjKTmTc1zlfZETMzszIMqoJgIkWLChXB0j83DXP65Ck4K~NC07Zb9T~X9swuCBw63JownKRUPW5YX-Qds~0Y-AQU4WlONrVNAiLDaShRQmnu~XvhZoUOiC5UaP4KvOXat4cRSyul1apY1an2jdfvvex1QYOAO8-X-sk~FvWevj73f8Smh89oWiCbBnmUs8ZF~e8t0zTg__",
        }}
      />

      <ButtonCreate
        title="Ir para a página inicial"
        type="SECONDARY"
        onPress={() => navigation.navigate("Home")}
      />
    </Container>
  );
}
