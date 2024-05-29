import { Image } from "react-native";
import {
  Container,
  ContainerInput,
  ContainerRow,
  GradientContainer,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Input";
import {
  ButtonDark,
  ButtonDarkSmall,
  ButtonLightSmall,
  ButtonText,
} from "../../components/Button/Style";
import { LinkButton, LinkText } from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { TextContent, TextHighlight } from "../../components/Text/Style";
import { InputCode, InputCodeBox } from "../../components/Input/Style";
import { BookThumbnail } from "../../components/Image/Style";

export const BookInfoScreen = () => {
  return (
    <Container>
      <ContainerRow>
        <BookThumbnail
          source={require("../../assets/LOGO.png")}
        ></BookThumbnail>
        //* :3
        <TextHighlight>Título:</TextHighlight>{" "}
        <TextContent>Lorem Ipsum, A tragetória</TextContent>
        <TextHighlight>Gênero:</TextHighlight>{" "}
        <TextContent>Bibliografia</TextContent>
        <TextHighlight>Autor:</TextHighlight>{" "}
        <TextContent>Nelipe Feto</TextContent>
        <TextHighlight>Editor:</TextHighlight>{" "}
        <TextContent>Coquetel</TextContent>
        <TextHighlight>ISBN:</TextHighlight>{" "}
        <TextContent>1254759812357</TextContent>
      </ContainerRow>
    </Container>
  );
};
