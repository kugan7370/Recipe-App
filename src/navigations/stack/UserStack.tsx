import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from '../BottomTab'
import { useEffect, useState } from 'react'

const Stack = createStackNavigator()

const UserStack = () => {

  return (
    <Stack.Navigator
      initialRouteName={
        'BottomTab'
      }
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  )
}

export default UserStack
