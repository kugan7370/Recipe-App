import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { ColorSheet } from '../../../ColorSheet'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSheet.White,
    width: '100%',
    height: '100%',
    paddingBottom: hp('3%'),
  },


})
