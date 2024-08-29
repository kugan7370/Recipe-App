import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { ColorSheet } from "../../../ColorSheet";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
const ProfileScreen = ({ navigation }: any) => {
  const [isVisible, setIsVisible] = useState(false);



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.White}
        animated={true}
      />

      {/* Profile pic */}
      <View style={styles.profilePicWrapper}>

        <Image
          style={styles.profilePlaceHolder}
          source={require("../../../assets/images/Profile.png")}

        />

        <Text style={styles.profileName}>Kugan</Text>
      </View>

      {/* profile list */}
      <View style={{ marginHorizontal: wp("5%"), marginTop: hp("3%") }}>
        {/* profile */}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("UpdateProfileScreen")}
        >
          <View style={styles.listWrapper}>
            <View style={styles.iconContainer}>
              <View style={styles.listIconWrapper}>
                <AntDesign name="user" size={20} color={ColorSheet.Primary} />
              </View>
              <Text style={styles.label}>Edit Profile</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={RFValue(25)}
              color={ColorSheet.Primary}
            />
          </View>
        </TouchableWithoutFeedback>

        {/* setting */}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("SettingScreen")}
        >
          <View style={styles.listWrapper}>
            <View style={styles.iconContainer}>
              <View style={styles.listIconWrapper}>
                <AntDesign name="setting" size={20} color={ColorSheet.Primary} />
              </View>
              <Text style={styles.label}>Setting</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={RFValue(25)}
              color={ColorSheet.Primary}
            />
          </View>
        </TouchableWithoutFeedback>
        {/* Help center */}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("HelpCenterScreen")}
        >
          <View style={styles.listWrapper}>
            <View style={styles.iconContainer}>
              <View style={styles.listIconWrapper}>
                <Entypo name="help" size={20} color={ColorSheet.Primary} />
              </View>
              <Text style={styles.label}>Help Center</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={RFValue(25)}
              color={ColorSheet.Primary}
            />
          </View>
        </TouchableWithoutFeedback>

        {/* Privacy Policy */}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("PrivacyPolicyScreen")}
        >
          <View style={styles.listWrapper}>
            <View style={styles.iconContainer}>
              <View style={styles.listIconWrapper}>
                <MaterialIcons name="security" size={20} color={ColorSheet.Primary} />
              </View>
              <Text style={styles.label}>Privacy Policy</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={RFValue(25)}
              color={ColorSheet.Primary}
            />
          </View>
        </TouchableWithoutFeedback>

        {/* Logout */}
        <TouchableWithoutFeedback onPress={() => setIsVisible(!isVisible)}>
          <View style={styles.listWrapper}>
            <View style={styles.iconContainer}>
              <View style={styles.listIconWrapper}>
                <MaterialIcons name="logout" size={20} color={ColorSheet.Primary} />
              </View>
              <Text style={styles.label}>Log Out</Text>
            </View>
            <MaterialIcons
              name="navigate-next"
              size={RFValue(25)}
              color={ColorSheet.Primary}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

    </SafeAreaView>
  );
};

export default ProfileScreen;
