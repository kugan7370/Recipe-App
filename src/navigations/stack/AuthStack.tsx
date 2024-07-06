import { createStackNavigator } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import OnboardingScreen from '../Auth/OnboardingScreen'

const Stack = createStackNavigator()

const AuthStack = () => {

  return (
    <Stack.Navigator
      initialRouteName={'OnboardingScreen'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
