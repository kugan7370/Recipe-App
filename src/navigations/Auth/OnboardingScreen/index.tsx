import { Image, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ColorSheet } from '../../../ColorSheet'
import { styles } from './styles'

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/onboading-animation.gif')}
          style={styles.image}
        />
      </View>

      {/* add logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/arcticons_recipe-keeper.png')}
          style={styles.logoImg}
        />
      </View>
      <Text style={styles.logoText}>YOUR LOGO</Text>

      {/* welcome to the app */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to recipe app where you virtually travel the world through recipe</Text>
      </View>

      {/* get started */}
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </View>

    </View>

  )
}

export default OnboardingScreen
