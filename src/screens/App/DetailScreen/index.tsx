import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ColorSheet } from "../../../ColorSheet";
import { styles } from "./styles";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

const detailOptions = [
  {
    id: 1,
    title: 'OverView'
  },
  {
    id: 2,
    title: 'Ingredients'
  },
  {
    id: 3,
    title: 'Direction'
  },
  {
    id: 4,
    title: 'Nutrition'
  },
  {
    id: 5,
    title: 'Reviews'
  },
  {
    id: 6,
    title: 'My Notes'
  },
]

const DetailScreen = () => {
  const [activeOption, setActiveOption] = useState(detailOptions[0].id);

  const renderContent = () => {
    switch (activeOption) {
      case 1:
        return <View style={styles.renderContainer}>
          <View style={styles.mainOverview}>
            {/* createdBy */}
            <View style={styles.OverViewInnerContainer}>
              {/* user icon */}
              <View style={styles.iconLeftContainer}>
                <FontAwesome5 name="user" size={14} color={ColorSheet.Primary} />
                <Text style={styles.overViewText}>Created by</Text>

              </View>
              <Text style={styles.overViewText}>John Doe</Text>
            </View>
            {/* rating */}
            <View style={styles.OverViewInnerContainer}>
              <View style={styles.iconLeftContainer}>
                <FontAwesome5 name="star" size={14} color={ColorSheet.Primary} />
                <Text style={styles.overViewText}>Rating</Text>
              </View>
              <Text style={styles.overViewText}>4.5</Text>
            </View>
            {/* total time */}
            <View style={styles.OverViewInnerContainer}>
              <View style={styles.iconLeftContainer}>

                <FontAwesome5 name="clock" size={14} color={ColorSheet.Primary} />
                <Text style={styles.overViewText}>Total Time</Text>
              </View>
              <Text style={styles.overViewText}>1 hour</Text>
            </View>
          </View>

          {/* description */}
          <ScrollView
            style={styles.descriptionContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.description}>
              Chinese cuisine is an important part of Chinese culture, which
              includes cuisine originating from the diverse regions of China, as
              well as from Overseas Chinese who have settled in other parts of
              the world. Because of the Chinese diaspora and historical power of
              the country, Chinese cuisine has influenced many other cuisines in
              Asia, with modifications made to cater to local palates. Chinese
              food staples such as rice, soy sauce, noodles, tea, and tofu, and
              utensils such as chopsticks and the wok, can now be found
              worldwide.
            </Text>
          </ScrollView>
        </View>;
      case 2:
        return <View style={styles.renderContainer}>
          <View style={styles.ingredientsContainer}>
            <View style={styles.ingredientListContainer}>
              <View style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>Ingredients</Text>
            </View>
            <View style={styles.ingredientListContainer}>
              <View style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>Ingredients</Text>
            </View>
            <View style={styles.ingredientListContainer}>
              <View style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>Ingredients</Text>
            </View>
            <View style={styles.ingredientListContainer}>
              <View style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>Ingredients</Text>
            </View>
          </View>
        </View>;

      case 3:
        return <View
          style={styles.renderContainer}
        >
          <View style={styles.directionContainer}>
            <View style={styles.directionListContainer}>
              <View style={styles.directionIcon} >
                <Text style={styles.directionIconText}>1</Text>
              </View>
              <Text style={styles.directionText}>To make the dough, combine the flour and salt in a large bowl.</Text>
            </View>
            <View style={styles.directionListContainer}>
              <View style={styles.directionIcon} >
                <Text style={styles.directionIconText}>2</Text>
              </View>
              <Text style={styles.directionText}>To make the dough, combine the flour and salt in a large bowl.</Text>
            </View>
          </View>
        </View>;
      case 4:
        return <View style={styles.renderContainer}>
          <View style={styles.ingredientsContainer}>
            <View style={styles.ingredientListContainer}>
              <View style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>Nutrition</Text>
            </View>
            <View style={styles.ingredientListContainer}>
              <View style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>Nutrition</Text>
            </View>
            <View style={styles.ingredientListContainer}>
              <View style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>Nutrition</Text>
            </View>
            <View style={styles.ingredientListContainer}>
              <View style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>Nutrition</Text>
            </View>
          </View>
        </View>;
      case 5: return <View style={styles.renderContainer}>
        {/* leave a review */}
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewText}>Leave a Review</Text>
        </View>
        {/* reviews */}
        <View style={styles.reviewListContainer}>
          <View style={styles.reviewInnerContainer}>
            <View style={styles.iconLeftContainer}>
              <FontAwesome5 name="user" size={14} color={ColorSheet.Primary} />
              <Text style={styles.overViewText}>John Doe</Text>
            </View>
            <View style={styles.iconLeftContainer}>
              <Text style={styles.overViewText}>8 month ago</Text>
            </View>
          </View>

          <Text style={styles.reviewDescription}>
            Chinese cuisine is an important part of Chinese culture, which
            includes cuisine originating from the diverse regions of China, as
            well as from Overseas Chinese who have settled in other parts of the
            world.
          </Text>

          <View style={styles.iconLeftContainer}>
            <FontAwesome5 name="star" size={14} color={ColorSheet.Primary} />
            <Text style={styles.overViewText}>4.5</Text>
          </View>
        </View>
        <View style={styles.reviewListContainer}>
          <View style={styles.reviewInnerContainer}>
            <View style={styles.iconLeftContainer}>
              <FontAwesome5 name="user" size={14} color={ColorSheet.Primary} />
              <Text style={styles.overViewText}>John Doe</Text>
            </View>
            <View style={styles.iconLeftContainer}>
              <Text style={styles.overViewText}>8 month ago</Text>
            </View>
          </View>

          <Text style={styles.reviewDescription}>
            Chinese cuisine is an important part of Chinese culture, which
            includes cuisine originating from the diverse regions of China, as
            well as from Overseas Chinese who have settled in other parts of the
            world.
          </Text>

          <View style={styles.iconLeftContainer}>
            <FontAwesome5 name="star" size={14} color={ColorSheet.Primary} />
            <Text style={styles.overViewText}>4.5</Text>
          </View>
        </View>
      </View>;

      case 6:
        return <Text>My Notes Content</Text>;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.White}
        animated={true}
      />

      {/* image */}
      <View style={styles.mainContainer}>
        <View style={styles.imgContaienr}>
          <Image
            source={require("../../../assets/images/Cuisines/Chinese.png")}
            style={styles.image}
          />

          <View style={styles.iconMainContainer}>
            {/* back icon */}
            <View style={styles.iconContainer}>

              <Entypo name="chevron-left" size={20} color="black" />
            </View>
            {/* share icon */}
            <View style={styles.iconContainer}>

              <Entypo name="share" size={20} color="black" />
            </View>
          </View>
        </View>

        {/* details */}

        <View style={styles.detailsContainer}>
          <View style={styles.titleContaienr}>
            <Text style={styles.title}>Chinese Cuisine</Text>
            <Text style={styles.category}>Chinese</Text>
          </View>

          {/*scroll options btn */}
          <View style={styles.scrollOptionsContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}


            >
              {detailOptions.map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => setActiveOption(item.id)}
                  style={[
                    styles.scrollOption,
                    item.id === activeOption && styles.activeOption
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      item.id === activeOption && styles.activeOptionText
                    ]}
                  >
                    {item.title}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <View style={styles.contentContainer}>
            {renderContent()}
          </View>

        </View>



      </View>



    </SafeAreaView>
  );
};

export default DetailScreen;
