import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "./src/screens/Navigation/Navigation";
import {
  useFonts,
  MontserratAlternates_100Thin,
  MontserratAlternates_200ExtraLight,
  MontserratAlternates_100Thin_Italic,
  MontserratAlternates_200ExtraLight_Italic,
  MontserratAlternates_300Light,
  MontserratAlternates_300Light_Italic,
  MontserratAlternates_400Regular,
  MontserratAlternates_400Regular_Italic,
  MontserratAlternates_500Medium,
  MontserratAlternates_500Medium_Italic,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_600SemiBold_Italic,
  MontserratAlternates_700Bold,
  MontserratAlternates_700Bold_Italic,
  MontserratAlternates_800ExtraBold,
  MontserratAlternates_800ExtraBold_Italic,
  MontserratAlternates_900Black,
  MontserratAlternates_900Black_Italic,
} from "@expo-google-fonts/montserrat-alternates";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_400Regular,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegation"
          component={Navigation}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
