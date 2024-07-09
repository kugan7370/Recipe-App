import {
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import React from "react";
import { ColorSheet } from "../../../ColorSheet";
import { styles } from "./styles";

const AddScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.White}
        animated={true}
      />
      <Text>Add Screen</Text>
    </SafeAreaView>
  );
};

export default AddScreen;
