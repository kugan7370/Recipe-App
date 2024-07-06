import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './stack/UserStack'
import AuthStack from './stack/AuthStack'

const Routes = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false)


  return (
    <NavigationContainer>
      {isFirstLaunch ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes
