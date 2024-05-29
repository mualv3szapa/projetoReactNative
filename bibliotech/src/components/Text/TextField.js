import { ContainerRow } from "../Container/Style";
import { InputBox, InputText, TextContent, TextHighlight } from "./Style";

export const Input = ({ label, content }) => {
  return (
    <>
      <ContainerRow>
        <TextHighlight>{label}</TextHighlight>
        <TextContent>{content}</TextContent>
      </ContainerRow>
    </>
  );
};
