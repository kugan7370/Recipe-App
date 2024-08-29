import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ColorSheet } from "../../../ColorSheet";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSheet.White,
    width: "100%",
    height: "100%",
    paddingBottom: hp("3%"),
  },
  // Profile pic
  profilePicWrapper: {
    alignItems: "center",
    marginTop: hp("10%"),
  },
  profilePlaceHolder: {
    width: wp("30%"),
    height: wp("30%"),
    backgroundColor: "#E2FAF7",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: ColorSheet.Primary,
    borderWidth: 1,
  },
  profileName: {
    fontSize: RFValue(15),
    color: ColorSheet.PrimaryText,
    fontFamily: 'Poppins-600',
    marginTop: hp("1%")
  },
  //   list
  listWrapper: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: hp("2%"),
    borderBottomWidth: 0.5,
    borderColor: ColorSheet.Border
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: "center"
  },
  listIconWrapper: {
    backgroundColor: ColorSheet.Secondary,
    padding: wp("3%"),
    borderRadius: 100
  },
  listIcon: {
    width: wp("4%"),
    height: wp("4%")
  },
  label: {
    fontSize: RFValue(13),
    color: ColorSheet.PrimaryText,
    fontFamily: 'Poppins-500',
    marginLeft: wp("3%")
  }
});
