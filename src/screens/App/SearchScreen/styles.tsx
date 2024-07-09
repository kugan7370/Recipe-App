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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  iconContainer: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('5%'),
    backgroundColor: ColorSheet.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(220, 220, 220, 1)'
  },
  icon: {
    width: wp('5%'),
    height: wp('5%'),
  },
  headerText: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-500',
    color: ColorSheet.PrimaryText,
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



  // search---------------------------------------
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

  // search result ---------------------------------------
  searchResultContainer: {
    flex: 1,
    marginTop: hp('3%'),
  },

  searchListContainer: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    marginBottom: hp('3%'),
  },
  imgContainer: {
    width: '100%',
    height: hp('27%'),
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  topContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('2%'),
    position: 'absolute',
    top: 2,
    width: '100%',
  },
  topContentLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorSheet.White,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    borderRadius: 5
  },
  topContentImg: {
    width: wp('3%'),
    height: wp('3%'),
    marginTop: wp('-0.8%'),
    objectFit: 'contain',
  },
  topContentText: {
    fontSize: RFValue(10),
    fontFamily: 'Poppins-400',
    color: ColorSheet.PrimaryText,
    marginLeft: wp('1%'),
  },
  topContentRightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('8%'),
    height: wp('8%'),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 100,
  },
  likeIcon: {
    width: wp('5%'),
    height: wp('5%'),
    objectFit: 'contain',
  },
  bottomContentContainer: {
    gap: wp('1%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1.5%'),
    backgroundColor: 'rgba(242, 242, 242, 1)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',

  },
  bottomDecContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),

  },
  bottomContentText: {
    fontSize: RFValue(12),
    fontFamily: 'Poppins-500',
    color: '#1C1C1C'
  },
  TimerIcon: {
    width: wp('5%'),
    height: wp('5%'),
    marginLeft: wp('-1%'),
    objectFit: 'contain',
  },
  time: {
    fontSize: RFValue(12),
    fontFamily: 'Poppins-500',
    color: '#7D7D7D'
  },
  createdBy: {
    fontSize: RFValue(10),
    fontFamily: 'Poppins-500',
    color: ColorSheet.SecondaryText,
  },





})
