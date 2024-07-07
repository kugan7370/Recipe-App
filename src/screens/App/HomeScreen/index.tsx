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
import { ColorSheet } from "../../../ColorSheet";
import { styles } from "./styles";
import { CategoryData, CuisinesData, SliderData } from "../../../Data";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Heading from "../../../Components/Heading";


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.White}
        animated={true}
      />

      {/* profile details */}
      <View style={styles.profileContainer}>
        <View style={styles.rightProfile}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={require("../../../assets/images/Profile.png")}
            />
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Hello <Text style={styles.name}>Jenny,</Text></Text>
            <Text style={styles.profileDesc}>What do you want to cook today?</Text>
          </View>

        </View>
        <View style={styles.leftProfile}>
          <Image
            style={styles.NotificaitonImage}
            source={require("../../../assets/icons/Notification.png")}
          />
          {/* badge */}
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </View>
      </View>


      {/* search bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInnerContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor='rgba(173, 173, 173, 1)'
          />
          <Image
            style={styles.searchIcon}
            source={require("../../../assets/icons/Search-1.png")}
          />
        </View>

        {/* filter  */}
        <View style={styles.filterContainer}>
          <Image
            style={styles.filterIcon}
            source={require("../../../assets/icons/Filter.png")}
          />

        </View>

      </View>

      <ScrollView>
        {/* Popular Recipes */}
        <Heading title="Popular Recipes" isButton={true} isIcon={true} />

        {/* Popular Recipes List */}
        <View style={styles.popularSliderMainContainer}>
          <FlatList
            data={SliderData}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (

              <View style={styles.popularSliderInnerContainer}>
                <View style={styles.popularImageContainer}>
                  <Image
                    style={styles.popularRecipesImage}
                    source={item.image}
                  />

                  <View style={styles.popularDecContainer}>
                    <Text style={styles.popularDecText}>{item.dec}</Text>
                    <View style={styles.ratingContainer}>
                      <Image
                        style={styles.popularRecipesRatingImage}
                        source={require("../../../assets/icons/Star.png")}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>

                  <View style={styles.favContainer}>
                    <Image
                      style={styles.favIcon}
                      source={item.isLiked ? require("../../../assets/icons/Red-Heart.png") : require("../../../assets/icons/Heart-Bg.png")}
                    />
                  </View>
                </View>

              </View>
            )}
          />


        </View>

        {/* Recipe Categories */}
        <Heading title="Meal Type" isButton />

        {/* Recipe Categories List */}
        <View style={styles.categoryContainer}>
          <FlatList
            data={CategoryData}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={[
                styles.categoryInnerContainer,
                index === 0 && styles.firstCategoryInnerContainer
              ]}>
                {item.image && <View style={styles.categoryImageContainer}>
                  <Image
                    style={styles.categoryImage}
                    source={item.image}
                  />
                </View>}

                <Text style={[styles.categoryText, index === 0 && styles.firstCategoryText]}>{item.title}</Text>
              </View>
            )}
          />

        </View>

        {/* Cuisines */}
        <Heading title="Cuisines" isButton />

        {/* Cuisines List */}
        <View style={styles.categoryContainer}>
          <FlatList
            data={CuisinesData}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={styles.cuisinesContainer}>
                <View style={styles.cuisinesImageContainer}>
                  <Image
                    style={styles.cuisinesImage}
                    source={item.image}
                  />
                </View>
                <Text style={styles.cuisinesText}>{item.title}</Text>
              </View>
            )}
          />

        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
