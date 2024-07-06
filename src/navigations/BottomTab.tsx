import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ColorSheet } from '../ColorSheet'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { Image, Text, View } from 'react-native'
import HomeScreen from '../screens/App/HomeScreen'
import SearchScreen from '../screens/App/SearchScreen'
import AddScreen from '../screens/App/AddScreen'
import FavouriteScreen from '../screens/App/FavouriteScreen'
import ProfileScreen from '../screens/App/ProfileScreen'



const Tab = createBottomTabNavigator()
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ColorSheet.White,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: hp(0.05),
          borderColor: ColorSheet.White,
          height: hp('10%'),

        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {focused ? (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/Home-2.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>


                </>
              ) : (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/Home-1.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>

                </>
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {focused ? (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/Search-2.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>


                </>
              ) : (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/Search-1.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>

                </>
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="AddScreen"
        component={AddScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {focused ? (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/Add-2.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>


                </>
              ) : (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/Add-1.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>

                </>
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {focused ? (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/Heart-2.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>


                </>
              ) : (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/Heart-1.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>

                </>
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {focused ? (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/User-2.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>


                </>
              ) : (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    <Image
                      source={require('../assets/icons/User-1.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    />
                  </View>

                </>
              )}
            </View>
          ),
        })}
      />


    </Tab.Navigator>
  )
}

export default BottomTab
