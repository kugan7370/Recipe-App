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
import { CategoryData, CuisinesData, newRecipes, popularRecipes, RescipesForYou, SliderData } from "../../../Data";
import { FlatList } from "react-native-gesture-handler";
import Heading from "../../../Components/Heading";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../Model";

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>>();

  const handleSearchPress = () => {
    navigation.navigate('SearchScreen', { focusSearchInput: true });
  };

  const handleImagePress = (item: any) => {
    navigation.navigate('Details', { item });
  };

  const renderHorizontalFlatList = (data: any, renderItem: any) => (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );

  const renderVerticalItem = ({ item }: any) => {
    switch (item.type) {
      case 'heading':
        return <Heading title={item.title} isButton={item.isButton} isIcon={item.isIcon} />;
      case 'popularRecipes':
        return (
          <View style={styles.popularSliderMainContainer}>
            {renderHorizontalFlatList(SliderData, ({ item }: any) => (
              <Pressable onPress={() => handleImagePress(item)}>
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
              </Pressable>
            ))}
          </View>
        );
      case 'categories':
        return (
          <View style={styles.categoryContainer}>
            {renderHorizontalFlatList(CategoryData, ({ item, index }: any) => (
              <Pressable onPress={() => handleImagePress(item)}>
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
              </Pressable>
            ))}
          </View>
        );
      case 'cuisines':
        return (
          <View style={styles.categoryContainer}>
            {renderHorizontalFlatList(CuisinesData, ({ item, index }: any) => (
              <Pressable onPress={() => handleImagePress(item)}>
                <View style={styles.cuisinesContainer}>
                  <View style={styles.cuisinesImageContainer}>
                    <Image
                      style={styles.cuisinesImage}
                      source={item.image}
                    />
                  </View>
                  <Text style={styles.cuisinesText}>{item.title}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        );
      case 'newRecipes':
        return (
          <View style={styles.newRecipesContainer}>
            {renderHorizontalFlatList(newRecipes, ({ item }: any) => (
              <Pressable onPress={() => handleImagePress(item)}>
                <View style={styles.newRecipesInnerContainer}>
                  <View style={styles.newRecipesImageContainer}>
                    <Image
                      style={styles.newRecipesImage}
                      source={item.image}
                    />
                    <View style={styles.favContainer}>
                      <Image
                        style={styles.favIcon}
                        source={item.isLiked ? require("../../../assets/icons/Red-Heart.png") : require("../../../assets/icons/Heart-Blank.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.newRecipesDecContainer}>
                    <Text style={styles.newRecipesDecText}>{item.desc}</Text>
                    <Text style={styles.newRecipesCreatedBy}>By {item.createdBy}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        );
      case 'popularRecipesWeek':
        return (
          <View style={styles.newRecipesContainer}>
            {renderHorizontalFlatList(popularRecipes, ({ item }: any) => (
              <Pressable onPress={() => handleImagePress(item)}>
                <View style={styles.newRecipesInnerContainer}>
                  <View style={styles.newRecipesImageContainer}>
                    <Image
                      style={styles.newRecipesImage}
                      source={item.image}
                    />
                    <View style={styles.favContainer}>
                      <Image
                        style={styles.favIcon}
                        source={item.isLiked ? require("../../../assets/icons/Red-Heart.png") : require("../../../assets/icons/Heart-Blank.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.newRecipesDecContainer}>
                    <Text style={styles.newRecipesDecText}>{item.desc}</Text>
                    <Text style={styles.newRecipesCreatedBy}>By {item.createdBy}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        );
      case 'recipesForYou':
        return (
          <View style={styles.RecipesContainer}>
            <FlatList
              data={RescipesForYou}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <Pressable onPress={() => handleImagePress(item)}>
                  <View style={styles.RecipesInnerContainer}>
                    <View style={styles.RecipesImageContainer}>
                      <Image
                        style={styles.newRecipesImage}
                        source={item.image}
                      />
                      <View style={styles.favContainer}>
                        <Image
                          style={styles.favIcon}
                          source={item.isLiked ? require("../../../assets/icons/Red-Heart.png") : require("../../../assets/icons/Heart-Blank.png")}
                        />
                      </View>
                    </View>
                    <View style={styles.RecipesDecContainer}>
                      <Text style={styles.newRecipesDecText}>{item.desc}</Text>
                      <View style={styles.RecipesDecInnerContainer}>
                        <Text style={styles.newRecipesCreatedBy}>By {item.createdBy}</Text>
                        <View style={styles.ratingContainer}>
                          <Image
                            style={styles.popularRecipesRatingImage}
                            source={require("../../../assets/icons/Star.png")}
                          />
                          <Text style={styles.RecipesRating}>{item.rating}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
        );
      default:
        return null;
    }
  };

  const ListHeaderComponent = () => (
    <View>
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
          <Pressable onPress={handleSearchPress}>
            <Image
              style={styles.searchIcon}
              source={require("../../../assets/icons/Search-1.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );

  const data = [
    { type: 'heading', title: 'Popular Recipes', isButton: true, isIcon: true },
    { type: 'popularRecipes' },
    { type: 'heading', title: 'Meal Type', isButton: true },
    { type: 'categories' },
    { type: 'heading', title: 'Cuisines', isButton: true },
    { type: 'cuisines' },
    { type: 'heading', title: 'New Recipes', isButton: true },
    { type: 'newRecipes' },
    { type: 'heading', title: 'Popular Recipes This Week', isButton: true },
    { type: 'popularRecipesWeek' },
    { type: 'heading', title: 'Recipes For You' },
    { type: 'recipesForYou' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.White}
        animated={true}
      />
      <View>
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
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Pressable onPress={handleSearchPress} style={styles.searchInnerContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor='rgba(173, 173, 173, 1)'
              editable={false} // Make it non-editable to prevent typing
            />
            <Image
              style={styles.searchIcon}
              source={require("../../../assets/icons/Search-1.png")}
            />
          </Pressable>
          <View style={styles.filterContainer}>
            <Image
              style={styles.filterIcon}
              source={require("../../../assets/icons/Filter.png")}
            />
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderVerticalItem}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
