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
    backgroundColor: ColorSheet.Primary,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: hp('15%'),
    flexDirection: 'row',
    width: wp('75%'),
    height: hp('35%'),

  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  logoContainer: {
    marginTop: hp('5%'),
    width: wp('30%'),
    height: hp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',

  },
  logoText: {
    fontSize: RFValue(30),
    fontFamily: 'Lexend-600',
    color: ColorSheet.White,
    marginTop: hp('1%'),
  },
  welcomeContainer: {
    paddingHorizontal: wp('12%'),
    marginTop: hp('8%'),
  },
  welcomeText: {
    fontSize: RFValue(12),
    color: ColorSheet.White,
    fontFamily: 'Poppins-400',
    textAlign: 'center',

  },
  getStartedContainer: {
    backgroundColor: ColorSheet.White,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('1.1%'),
    borderRadius: 5,
    marginTop: hp('3%'),
    width: wp('50%'),
  },
  getStartedText: {
    fontSize: RFValue(14),
    color: ColorSheet.Primary,
    fontFamily: 'Poppins-500',
  },

})
