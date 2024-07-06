import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ColorSheet } from '../ColorSheet'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { Image, Text, View } from 'react-native'
import HomeScreen from '../screens/App/HomeScreen'



const Tab = createBottomTabNavigator()
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ColorSheet.White,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#ffffff',
          borderTopWidth: hp(0.05),
          borderColor: '#DFDFDF',
          height: hp('10%'),
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
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
                      backgroundColor: ColorSheet.Secondary,
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    {/* <Image
                      source={require('../assets/images')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    /> */}
                  </View>

                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: RFValue(10),
                      color: ColorSheet.Primary,
                    }}
                  >
                    Home
                  </Text>
                </>
              ) : (
                <>
                  <View
                    style={{
                      borderRadius: 50,
                      padding: wp('2%'),
                    }}
                  >
                    {/* <Image
                      source={require('../assets/icons/ICHome.png')}
                      style={{
                        width: wp('6%'),
                        height: wp('6%'),
                      }}
                    /> */}
                  </View>

                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: RFValue(10),
                      color: ColorSheet.BottomTabInactive,
                    }}
                  >
                    Home
                  </Text>
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
