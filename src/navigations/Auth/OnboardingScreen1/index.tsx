import { StatusBar, Text, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ColorSheet } from '../../../ColorSheet'
import { styles } from './styles'

const OnboardingScreen1 = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.White}
        animated={true}
      />
      <Text>Onboarding Screen 1</Text>

    </SafeAreaView>
  )
}

export default OnboardingScreen1
