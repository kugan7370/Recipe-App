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

  // header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('3%'),
    paddingHorizontal: wp('5%'),
    shadowColor: '#bebebe',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    zIndex: 999,
  },
  imageContainer: {
    width: wp('16%'),
    height: wp('16%'),
    overflow: 'hidden',
    padding: wp('1%'),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorSheet.Primary,

  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    overflow: 'hidden',

  },
  ProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProfileDetailContainer: {
    marginLeft: wp('3%'),
    gap: wp('1%'),
  },
  profileName: {
    fontSize: RFValue(15),
    color: ColorSheet.PrimaryText,
    fontFamily: 'urbanist-bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: RFValue(12),
    color: ColorSheet.PrimaryText,
    fontFamily: 'urbanist-regular',
  },
  notificationContainer: {
    width: wp('10%'),
    height: wp('10%'),
    padding: wp('2%'),
    borderRadius: 100,
    backgroundColor: ColorSheet.Secondary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationImage: {
    width: '100%',
    height: '100%',

  },
  notificationBadge: {
    position: 'absolute',
    top: 2,
    right: 0,
    backgroundColor: '#D14747',
    width: wp('4.5%'),
    height: wp('4.5%'),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    fontSize: RFValue(8),
    color: ColorSheet.White,
    fontFamily: 'urbanist-bold',
  },

  // hero section
  heroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: ColorSheet.Primary,
    marginTop: hp('4%'),
    marginHorizontal: wp('5%'),
    borderRadius: wp('5%'),
    position: 'relative',
    // height: hp('20%'),
  },
  heroDetailContainer: {
    width: wp('60%'),
    gap: hp('1%'),
  },
  heroTitle: {
    fontSize: RFValue(22),
    color: ColorSheet.White,
    fontFamily: 'urbanist-semiBold',
  },
  heroSubtitle: {
    fontSize: RFValue(8),
    color: ColorSheet.White,
    fontFamily: 'urbanist-regular',
    marginTop: hp('1%'),
  },
  heroSpecialContainer: {
    flexDirection: 'row',
    gap: wp('15%'),
    marginTop: hp('2%'),
  },
  heroSpecialText: {
    fontSize: RFValue(12),
    color: ColorSheet.White,
    fontFamily: 'urbanist-semiBold',
  },
  heroImageContainer: {
    width: wp('30%'),
    position: 'absolute',
    right: 0,
    top: hp('3%'),
    bottom: 0,
    marginTop: hp('-6%'),
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  // service
  servicesContainer: {
    paddingHorizontal: wp('5%'),
    marginTop: hp('2%'),

  },
  serviceInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),

  },
  servicesTitle: {
    fontSize: RFValue(14),
    color: ColorSheet.PrimaryText,
    fontFamily: 'urbanist-medium',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('4%'),
    backgroundColor: ColorSheet.Primary,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: RFValue(12),
    color: ColorSheet.White,
    fontFamily: 'urbanist-semiBold',
  },

  // upComingContainer
  upComingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('4%'),
    height: 'auto',
    borderRadius: wp('2%'),
    backgroundColor: ColorSheet.Secondary,
  },
  upComingImgContainer: {
    backgroundColor: ColorSheet.Primary,
    width: wp('30%'),
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: wp('2%'),
  },
  upDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('1%'),
  },
  upComingImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  upComingDetail: {
    marginLeft: wp('3%'),
    gap: hp('1%'),
  },
  upScheduleDetails: {
    flexDirection: 'row',
    gap: wp('3%'),
  },

  upTitle: {
    fontSize: RFValue(14),
    color: ColorSheet.Primary,
    fontFamily: 'urbanist-bold',
  },
  UpAuthor: {
    fontSize: RFValue(12),
    color: ColorSheet.SecondaryText,
    marginTop: hp('1%'),
    fontFamily: 'urbanist-semiBold',
  },
  schedule: {
    fontSize: RFValue(12),
    color: ColorSheet.SecondaryText,
    fontFamily: 'urbanist-medium',
  },
  calenderIcon: {
    width: wp('4%'),
    height: wp('4%'),
  },

  // contact us
  contactContainer: {
    marginTop: hp('3%'),
    overflow: 'hidden',
    minHeight: hp('25%'),
    height: hp('27%'),
  },
  backgroundOverlay: {
    backgroundColor: ColorSheet.Primary,
    width: '100%',
    height: '100%',
    padding: wp('5%'),
    opacity: 0.9,
  },

  iconMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2%'),
    gap: wp('5%'),
  },
  iconInnerContainer: {
    alignItems: 'center',
    backgroundColor: '#abc9c783',
    height: hp('13%'),
    width: wp('28%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',

  },
  iconContainer: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    backgroundColor: ColorSheet.White,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1
  },
  contactText: {
    fontSize: RFValue(12),
    color: ColorSheet.White,
    marginTop: hp('1%'),
    fontFamily: 'urbanist-medium',
  },
  contactSubtitle: {
    fontSize: RFValue(12),
    fontFamily: 'urbanist-medium',
    color: ColorSheet.White,
  },
  contactTitle: {
    fontSize: RFValue(15),
    color: ColorSheet.White,
    marginTop: hp('1%'),
    fontFamily: 'urbanist-semiBold',
  },
})
