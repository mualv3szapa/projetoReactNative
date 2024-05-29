import { Image } from "react-native";
import {
  Container,
  ContainerColumn,
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
import {
  InputBox,
  InputCode,
  InputCodeBox,
} from "../../components/Input/Style";
import { BookThumbnail } from "../../components/Image/Style";
import { TextField } from "../../components/Text/TextField";
import { BookInfoContainer } from "./Style";

export const BookInfoScreen = () => {
  return (
    <Container>
        <BookInfoContainer>
          <BookThumbnail
            source={require("../../assets/LOGO.png")}
          ></BookThumbnail>
          <ContainerColumn>
            <TextField
              label={"Título:"}
              content={"Felipe Neto, A trajetória"}
            />
            <TextField label={"Gênero:"} content={"Biografia"} />
            <TextField label={"Autor:"} content={"Nelipe Feto"} />
            <TextField label={"Editor:"} content={"Coquetel"} />
            <TextField label={"ISBN:"} content={"1254759812357"} />
          </ContainerColumn>
        </BookInfoContainer>

        <InputBox>
          <Title>Resenhas</Title>
        </InputBox>
    </Container>
  );
};
