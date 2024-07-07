import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { styles } from "./styles";

interface HeadingProps {
  title: string
  isButton?: boolean,
  onPress?: () => void,
  isIcon?: boolean
}


const Heading = ({ title, isButton, isIcon }: HeadingProps) => {
  return (
    <View style={styles.popularRecipesContainer}>
      <View style={styles.popularInnerContainer}>
        <View style={styles.rightPopular}>
          <Text style={styles.popularRecipes}>{title}</Text>
          {isIcon && <Image
            style={styles.popularRecipesIcon}
            source={require("../../assets/icons/Fire.png")}
          />}
        </View>
        {isButton && <Pressable style={styles.viewContainer}>
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>}
      </View>
    </View>
  )
}

export default Heading