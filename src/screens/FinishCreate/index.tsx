import { useNavigation } from "@react-navigation/native";
import { ButtonCreate } from "../../components/ButtonCreate";
import { Highlight } from "../../components/Highlight";
import { ImageDiet } from "../../components/ImageDiet";

import { Container, Details, HighlightedText } from "./styles";

export function FinishCreate() {
  const navigation = useNavigation();
  return (
    <Container>
      <Highlight title="Continue assim!" />
      <Details>
        Você continua <HighlightedText>dentro da dieta. </HighlightedText>Muito
        bem!
      </Details>
      <ImageDiet
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/8131/13c2/257290c2d4ff3f0500fc40cb48a1a6f1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e6O9QFbRekhYjrNlKO5Y40g3qsGADhQ~GhQ3cIK-U7THSOvPPmKoVImS2rJt23CLL7v1bI-SsdJ~PEoT7jBBZLQxQ3pE18mVwGcinLsCeGvMpDBNrYYBxdJBCsNl~QnndfIarZ4pH3KXfMBqCr8I6P-TMKL2qOhoI5gq1g4iAzDNSoLypdq7xDzZH8SKDwWGV~O~5Vv-IYBARMY7c44bwV~IzKr9fb9ETaXDF~a9Sj0VBvEyZZJ4mxAzEEMoG2L-RfwzuolGv0elQJj91blvPcJ9TTIq-dd5ag6qpDMLHa8JCfVSNnOc6V5EwlLSQC94Cu7OFKP1KUd09jhcTyuy9g__",
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
