import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { ColorSheet } from '../../ColorSheet'

export const styles = StyleSheet.create({

  // popular recipes
  popularRecipesContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: wp('2%'),
  },
  popularInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightPopular: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularRecipes: {
    fontSize: RFValue(14),
    color: ColorSheet.Black,
    fontFamily: 'Poppins-600'
  },
  popularRecipesIcon: {
    width: wp('6%'),
    height: wp('6%'),
    objectFit: 'contain',
    marginLeft: wp('1%')
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('2%'),
    borderRadius: 5,
  },
  viewAll: {
    fontSize: RFValue(10),
    color: ColorSheet.SecondaryText,
    fontFamily: 'Poppins-500'
  },



})
