import { View, Text } from 'react-native'
import { ColorSheet } from './src/ColorSheet'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Routes from './src/navigations/Routes'

export default function App() {
  const fonts = {
    'Poppins-400': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-500': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-600': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-700': require('./src/assets/fonts/Poppins-Bold.ttf'),
  }

  const [fontsLoaded, fontError] = useFonts(fonts)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (

    <View
      style={{ flex: 1, backgroundColor: ColorSheet.White }}
      onLayout={onLayoutRootView}
    >
      <Routes />
    </View>

  )
}
