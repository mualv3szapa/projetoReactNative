import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #001b21;
  justify-content: center;
  align-items: center;
`;

export const ContainerRow = styled.View`
  width: 80%;
  height: fit-content;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const GradientContainer = styled(LinearGradient).attrs({
  colors: ["#2C7DA0", "#012141"],
  start: { x: -0.05, y: 0.95 },
  end: { x: 0.9, y: -0.1 },
})`
  margin-top: 10%;
  margin-bottom: 10%;
  width: 100%;
  height: 100%;
  background-color: #3faad7;

  justify-content: center;
  align-items: center;
`;
