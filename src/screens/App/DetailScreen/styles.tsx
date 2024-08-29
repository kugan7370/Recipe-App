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
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imgContaienr: {
    width: '100%',
    height: hp('35%'),
    backgroundColor: ColorSheet.White,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  iconMainContainer: {
    position: 'absolute',
    top: hp('2%'),
    left: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('94%'),
  },
  iconContainer: {
    backgroundColor: ColorSheet.White,
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: ColorSheet.White,

  },
  titleContaienr: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  title: {
    fontSize: RFValue(18),
    fontFamily: 'Poppins-600',
  },
  category: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-400',
    color: ColorSheet.SecondaryText,
  },
  scrollOptionsContainer: {
    width: '100%',
    paddingLeft: wp('5%'),
    height: 'auto',

  },
  scrollOption: {
    alignItems: 'center',
    marginRight: wp('5%'),
    borderWidth: 1,
    borderColor: ColorSheet.Primary,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 4,
  },
  optionText: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-400',

  },
  activeOption: {
    borderWidth: 1,
    borderBottomColor: ColorSheet.Primary,
    backgroundColor: ColorSheet.Primary,

  },
  activeOptionText: {
    color: ColorSheet.White,
    fontFamily: 'Poppins-400',
  },
  contentContainer: {
    marginHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    marginTop: hp('3%'),
    borderTopWidth: .2,
    borderTopColor: ColorSheet.Border,

  },

  // renderContainer
  renderContainer: {

  },
  mainOverview: {
  },
  OverViewInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  iconLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  overViewText: {
    fontSize: RFValue(12),
    fontFamily: 'Poppins-400',
    marginLeft: wp('2%'),
  },
  descriptionContainer: {
    marginTop: hp('2%'),
    width: '100%',
    height: '50%'
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: 'Poppins-400',
    textAlign: 'justify',
    color: ColorSheet.SecondaryText,
    lineHeight: 20,
  },


  // ingredients
  ingredientsContainer: {
    width: '100%',
    height: '50%'
  },
  ingredientListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  ingredientIcon: {
    width: wp('3%'),
    height: wp('3%'),
    borderRadius: 100,
    backgroundColor: ColorSheet.Primary,
  },
  ingredientText: {
    fontSize: RFValue(12),
    fontFamily: 'Poppins-400',
    marginLeft: wp('2%'),
  },

  // directions
  directionContainer: {
    width: '100%',

  },
  directionListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
    gap: wp('4%'),

  },
  directionIcon: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: 100,
    backgroundColor: ColorSheet.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  directionIconText: {
    fontSize: RFValue(12),
    fontFamily: 'Poppins-400',
    color: ColorSheet.White,

  },
  directionText: {
    fontSize: RFValue(12),
    fontFamily: 'Poppins-400',
    flex: 1,
    flexShrink: 1,
  },

  // reviews
  reviewContainer: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: hp('2%'),


  },
  reviewText: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-600',
  },
  reviewListContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: ColorSheet.Review,
    gap: hp('1.5%'),
    padding: wp('5%'),
    borderRadius: 10,
    marginBottom: hp('2%'),
  },
  reviewInnerContainer: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },


  reviewDescription: {
    fontSize: RFValue(12),
    fontFamily: 'Poppins-400',
    textAlign: 'justify',
    color: ColorSheet.SecondaryText,
    lineHeight: 20,
  },






})
