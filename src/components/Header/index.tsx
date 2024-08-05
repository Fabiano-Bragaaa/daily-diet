import Logo from "../../assets/Logo.png";
import Avatar from "../../assets/Ellipse.png";
import { AvatarImg, Container, LogoImg } from "./styles";

export default function Header() {
  return (
    <Container>
      <LogoImg source={Logo} />
      <AvatarImg source={Avatar} />
    </Container>
  );
}
