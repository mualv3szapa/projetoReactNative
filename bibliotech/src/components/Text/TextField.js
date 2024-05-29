import { ContainerRow } from "../Container/Style";
import {
  InputBox,
  InputText,
  TextContent,
  TextFieldBox,
  TextHighlight,
} from "./Style";

export const TextField = ({ label, content }) => {
  return (
    <TextFieldBox>
      <TextHighlight>{label}</TextHighlight>
      <TextContent>{content}</TextContent>
    </TextFieldBox>
  );
};
