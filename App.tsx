import { View, Text } from 'react-native'
import { ColorSheet } from './src/ColorSheet'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Routes from './src/navigations/Routes'

export default function App() {
  const fonts = {
    'urbanist-medium': require('./src/assets/fonts/Urbanist-Medium.ttf'),
    'urbanist-regular': require('./src/assets/fonts/Urbanist-Regular.ttf'),
    'urbanist-semiBold': require('./src/assets/fonts/Urbanist-SemiBold.ttf'),
    'urbanist-bold': require('./src/assets/fonts/Urbanist-Bold.ttf'),
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
