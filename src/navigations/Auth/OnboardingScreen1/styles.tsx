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
  },
  skipWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: wp('7%'),
    marginTop: hp('2%'),
  },
  skipBtn: {
    color: ColorSheet.Primary,
    fontSize: RFValue(14),
    fontFamily: 'urbanist-medium',
  },
  img: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: RFValue(18),
    color: ColorSheet.SecondaryText,
    paddingHorizontal: wp('5%'),
    textAlign: 'center',
    fontFamily: 'urbanist-semiBold',
  },
  content: {
    fontSize: RFValue(12),
    color: ColorSheet.ContentText,
    textAlign: 'center',
    marginTop: hp('1%'),
    fontFamily: 'urbanist-regular',
  },
  btnWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp('5%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: wp('7%'),
  },
  indicatorWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
  },
  indicator: {
    width: wp('3%'),
    height: wp('3%'),
    backgroundColor: ColorSheet.indicator,
    borderRadius: 50,
  },
  nextBtn: {
    backgroundColor: ColorSheet.Primary,
    width: wp('10%'),
    height: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
})
