import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '../../../ColorSheet'; // Adjust the path if necessary



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'),
    backgroundColor: ColorSheet.White,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    marginBottom: hp('4%'),
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

  scrollContainer: {
    flexGrow: 1,
  },
  formGroup: {
    marginBottom: hp('2%'),
  },
  label: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-400',
    marginBottom: hp('1%'),
    color: ColorSheet.PrimaryText,
  },
  input: {
    borderWidth: 1,
    borderColor: ColorSheet.Border,
    // borderRadius: 8,
    padding: wp('3%'),
    fontSize: RFValue(12),
    fontFamily: 'Poppins-400',
    backgroundColor: ColorSheet.White,
    marginBottom: hp('1.5%'),
  },
  inputSmall: {
    flex: 1,
    marginRight: wp('2%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
  table: {
    borderWidth: 1,
    borderColor: ColorSheet.Border,
    marginTop: hp('4%'),
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: ColorSheet.Secondary,
    padding: wp('2%'),
    borderBottomWidth: 1,
    // marginTop: hp('4%'),
    borderColor: ColorSheet.Border,
  },
  tableHeaderCell: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-400',
    color: ColorSheet.PrimaryText,
    fontSize: RFValue(14),
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: ColorSheet.Border,
    padding: wp('2%'),
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-400',
    color: ColorSheet.PrimaryText,
    fontSize: RFValue(14),
  },
  listItem: {
    backgroundColor: ColorSheet.White,
    padding: wp('3%'),
    borderRadius: 8,
    marginBottom: hp('1%'),
    shadowColor: ColorSheet.Black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listItemText: {
    fontSize: RFValue(16),
    fontFamily: 'Poppins-400',
    color: ColorSheet.PrimaryText,
  },
});

