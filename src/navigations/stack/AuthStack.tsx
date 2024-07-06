import { createStackNavigator } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import OnboardingScreen1 from '../Auth/OnboardingScreen1'

const Stack = createStackNavigator()

const AuthStack = () => {

  return (
    <Stack.Navigator
      initialRouteName={'OnboardingScreen1'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
    </Stack.Navigator>
  )
}

export default AuthStack
