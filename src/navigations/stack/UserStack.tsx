import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from '../BottomTab'
import { useEffect, useState } from 'react'
import DetailScreen from '../../screens/App/DetailScreen'

const Stack = createStackNavigator()

const UserStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Details" component={DetailScreen} />

    </Stack.Navigator>
  )
}

export default UserStack
