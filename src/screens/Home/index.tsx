import ButtonDetails from "../../components/ButtonDetails";
import Header from "../../components/Header";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <ButtonDetails title="90,86%" />
    </Container>
  );
}
