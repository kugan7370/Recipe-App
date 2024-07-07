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

  // profile
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingTop: wp('5%'),
  },
  rightProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  profileDetails: {
    marginLeft: wp('5%'),
  },
  profileName: {
    fontSize: RFValue(14),
    color: ColorSheet.Black,
    fontFamily: 'Poppins-500'
  },
  name: {
    color: ColorSheet.Primary,
    fontSize: RFValue(14),
    fontFamily: 'Poppins-500'
  },
  profileDesc: {
    fontSize: RFValue(10),
    color: ColorSheet.SecondaryText,
  },
  leftProfile: {
    width: wp('9%'),
    height: wp('9%'),
    borderRadius: 100,
    borderWidth: .2,
    borderColor: ColorSheet.Border,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('1.5%'),
    position: 'relative',
    shadowColor: 'rgba(0, 0, 0, 0.15)'
  },
  NotificaitonImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  badgeContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: wp('3.5%'),
    height: wp('3.5%'),
    borderRadius: 100,
    backgroundColor: ColorSheet.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: ColorSheet.White,
    fontSize: RFValue(8),
    fontFamily: 'Poppins-500'
  },


  // search
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('5%'),
    borderBottomColor: ColorSheet.Border,
    borderBottomWidth: .2,
  },
  searchInnerContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(223, 223, 223, 1)',
    padding: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchInput: {
    fontSize: RFValue(10),
    color: ColorSheet.Black,
    fontFamily: 'Poppins-400',
    flex: 1,
  },
  searchIcon: {
    width: wp('4%'),
    height: wp('4%'),
    objectFit: 'contain',
  },
  filterContainer: {
    padding: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: ColorSheet.Primary
  },
  filterIcon: {
    width: wp('5%'),
    height: wp('5%'),
    objectFit: 'contain',
  },

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

  // popular recipes--------------------------------

  popularSliderMainContainer: {
    paddingLeft: wp('5%'),
    paddingVertical: hp('1%'),
    marginBottom: hp('2%'),
  },
  popularSliderInnerContainer: {
    marginRight: wp('5%'),
  },
  popularImageContainer: {
    width: wp('73%'),
    height: hp('22%'),
    borderRadius: 5,
    overflow: 'hidden',
  },
  popularRecipesImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  popularDecContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popularDecText: {
    fontSize: RFValue(12),
    color: ColorSheet.White,
    fontFamily: 'Poppins-500'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularRecipesRatingImage: {
    width: wp('3%'),
    height: wp('3%'),
    objectFit: 'contain',
    marginRight: wp('1%')
  },
  rating: {
    fontSize: RFValue(10),
    color: ColorSheet.White,
    fontFamily: 'Poppins-400'
  },
  favContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: wp('3%'),
    width: wp('8%'),
    height: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  favIcon: {
    width: wp('5%'),
    height: wp('5%'),
    objectFit: 'contain',
  },


  // meal type--------------------------------------

  categoryContainer: {
    paddingLeft: wp('5%'),
    marginTop: hp('1%'),
    marginBottom: hp('2%'),

  },
  categoryInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorSheet.Secondary,
    gap: wp('3%'),
    paddingRight: wp('5%'),
    paddingLeft: wp('2%'),
    paddingVertical: hp('1%'),
    minWidth: wp('20%'),
    borderRadius: 5,
    marginRight: wp('2%'),
  },
  firstCategoryInnerContainer: {
    backgroundColor: ColorSheet.Primary,
  },
  firstCategoryText: {
    color: ColorSheet.White,
    fontFamily: 'Poppins-500',
    fontSize: RFValue(14),
    marginLeft: wp('2%'),

  },

  categoryImageContainer: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: ColorSheet.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: wp('4%'),
    height: hp('4%'),
    objectFit: 'contain',

  },
  categoryText: {
    fontSize: RFValue(10),
    color: ColorSheet.Black,
    fontFamily: 'Poppins-400'
  },

  // cuisines----------------------------------------
  cuisinesContainer: {
    marginRight: wp('5%'),
  },
  cuisinesImageContainer: {
    width: wp('23%'),
    height: wp('23%'),
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: ColorSheet.White,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  cuisinesImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  cuisinesText: {
    fontSize: RFValue(12),
    color: ColorSheet.Black,
    fontFamily: 'Poppins-500',
    textAlign: 'center',
  },


})
