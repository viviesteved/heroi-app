import { Stack } from 'expo-router';
import { useFonts } from '@expo-google-fonts/poppins';
import {Poppins_400Regular,Poppins_600SemiBold, Poppins_700Bold,} from '@expo-google-fonts/poppins';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({Poppins: Poppins_400Regular,PoppinsSemiBold: Poppins_600SemiBold,PoppinsBold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
    screenOptions={{ headerShown: false,
      }}
    />
  );
}