import React from "react";
import {useFonts} from 'expo-font'
import MainLayout from "./src/MainLayout";
import TodoState from "./src/context/todo/TodoState";
//import * as SplashScreen from 'expo-splash-screen';

//SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        'roboto-regular': require("./assets/fonts/Roboto-Regular.ttf"),
        'roboto-bold': require("./assets/fonts/Roboto-Bold.ttf"),
    });

    /*const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);*/

    if(!fontsLoaded) return null;

  return (
      <TodoState>
          <MainLayout />
      </TodoState>
  );
}


