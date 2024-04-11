import 'react-native-gesture-handler';
import { useFonts, LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy';
import { Dispatch, SetStateAction, useState } from 'react'

import Navigation from './src/navigation';


export interface IPagina{
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }
  return(
    <Navigation/>
  )
}