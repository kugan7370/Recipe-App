import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { ColorSheet } from "../../../ColorSheet";
import { styles } from "./styles";
import { SearchData } from "../../../Data";

const FavouriteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.White}
        animated={true}
      />

      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../../assets/icons/left-arrow.png")}
            style={styles.icon}
          />

        </View>
        <Text style={styles.headerText}>
          Your Favourites
        </Text>
        <View style={styles.leftProfile}>

        </View>
      </View>



      {/* search result */}

      <View style={styles.searchResultContainer}>
        <FlatList
          data={SearchData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.searchListContainer}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.img}
                  source={item.image}
                />

                {/* top contents */}
                <View style={styles.topContentContainer}>
                  <View style={styles.topContentLeftContainer}>
                    <Image
                      style={styles.topContentImg}
                      source={require("../../../assets/icons/Star.png")}
                    />
                    <Text style={styles.topContentText}>{item.rating} (100+ Reviews)</Text>
                  </View>
                  <View style={styles.topContentRightContainer}>
                    <Image
                      style={styles.likeIcon}
                      source={item.isLiked ? require("../../../assets/icons/Red-Heart.png") : require("../../../assets/icons/Heart-Bg.png")}
                    />
                  </View>

                </View>

                {/* bottom contents */}
                <View style={styles.bottomContentContainer}>
                  <Text style={styles.bottomContentText}>{item.desc}</Text>
                  <View style={styles.bottomDecContainer}>
                    <Image
                      style={styles.TimerIcon}
                      source={require("../../../assets/icons/Timer.png")}
                    />
                    <Text style={styles.time}>35 mins</Text>
                    <Text style={styles.createdBy}>By {item.createdBy}</Text>

                  </View>

                </View>

              </View>

            </View>
          )}
        />
      </View>
    </SafeAreaView >
  );
};

export default FavouriteScreen;
