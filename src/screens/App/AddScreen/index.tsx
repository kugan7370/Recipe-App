import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView, StatusBar, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Recipe, Ingredient, NutritionalInformation } from '../../../Model'; // Adjust the path accordingly
import { ColorSheet } from '../../../ColorSheet';
import { styles } from './styles';


const AddRecipeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [mealType, setMealType] = useState('');
  const [recipeImage, setRecipeImage] = useState('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [nutritionalInformation, setNutritionalInformation] = useState<NutritionalInformation>({
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
  });

  const [newIngredient, setNewIngredient] = useState<{ name: string; quantity: string; unit: string }>({ name: '', quantity: '', unit: '' });
  const [newNutritionalInfo, setNewNutritionalInfo] = useState<{ key: string; value: string }>({ key: '', value: '' });

  const handleAddIngredient = () => {
    setIngredients([...ingredients, {
      name: newIngredient.name,
      quantity: parseFloat(newIngredient.quantity),
      unit: newIngredient.unit,
    }]);
    setNewIngredient({ name: '', quantity: '', unit: '' });
  };

  const handleAddNutritionalInfo = () => {
    const key = newNutritionalInfo.key as keyof NutritionalInformation;
    setNutritionalInformation(prev => ({
      ...prev,
      [key]: parseFloat(newNutritionalInfo.value),
    }));
    setNewNutritionalInfo({ key: '', value: '' });
  };

  const handleSubmit = () => {
    const newRecipe: Recipe = {
      title,
      description,
      instructions,
      cuisine_type: cuisineType,
      meal_type: mealType,
      recipe_image: recipeImage,
      created_by: 1, // Set this based on your authentication logic
      ingredients,
      nutritional_information: nutritionalInformation
    };

    // Here you would send `newRecipe` to your backend API
    console.log('Recipe submitted:', newRecipe);

    // Navigate back or show a success message
    navigation.goBack();
  };

  const renderIngredientItem = ({ item }: { item: Ingredient }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.name}</Text>
      <Text style={styles.tableCell}>{item.quantity}</Text>
      <Text style={styles.tableCell}>{item.unit}</Text>
    </View>
  );

  const renderNutritionalInfoRow = (key: string, value: number) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{key}</Text>
      <Text style={styles.tableCell}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={ColorSheet.White} animated={true} />
      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../../assets/icons/left-arrow.png")}
            style={styles.icon}
          />

        </View>
        <Text style={styles.headerText}> Add Your Recipe </Text>
        <View style={styles.leftProfile}>

        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Instructions</Text>
          <TextInput
            style={styles.input}
            value={instructions}
            onChangeText={setInstructions}
            multiline
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Cuisine Type</Text>
          <TextInput
            style={styles.input}
            value={cuisineType}
            onChangeText={setCuisineType}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Meal Type</Text>
          <TextInput
            style={styles.input}
            value={mealType}
            onChangeText={setMealType}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Recipe Image URL</Text>
          <TextInput
            style={styles.input}
            value={recipeImage}
            onChangeText={setRecipeImage}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Add Ingredient</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.inputSmall]}
              placeholder="Name"
              value={newIngredient.name}
              onChangeText={(text) => setNewIngredient(prev => ({ ...prev, name: text }))}
            />
            <TextInput
              style={[styles.input, styles.inputSmall]}
              placeholder="Quantity"
              keyboardType="numeric"
              value={newIngredient.quantity}
              onChangeText={(text) => setNewIngredient(prev => ({ ...prev, quantity: text }))}
            />
            <TextInput
              style={[styles.input, styles.inputSmall]}
              placeholder="Unit"
              value={newIngredient.unit}
              onChangeText={(text) => setNewIngredient(prev => ({ ...prev, unit: text }))}
            />
          </View>
          <Button title="Add Ingredient" onPress={handleAddIngredient} color={ColorSheet.lightPrimary} />

          {ingredients.length > 0 && <View style={styles.table} >
            <FlatList
              data={ingredients}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderIngredientItem}
              ListHeaderComponent={() => (
                <View style={styles.tableHeader}>
                  <Text style={styles.tableHeaderCell}>Name</Text>
                  <Text style={styles.tableHeaderCell}>Quantity</Text>
                  <Text style={styles.tableHeaderCell}>Unit</Text>
                </View>
              )}
            />
          </View>}

        </View>
        <View style={styles.formGroup}>
          <Text style={[styles.label]}>Add Nutritional Information</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.inputSmall]}
              placeholder="Nutrient"
              value={newNutritionalInfo.key}
              onChangeText={(text) => setNewNutritionalInfo(prev => ({ ...prev, key: text }))}
            />
            <TextInput
              style={[styles.input, styles.inputSmall]}
              placeholder="Value"
              keyboardType="numeric"
              value={newNutritionalInfo.value}
              onChangeText={(text) => setNewNutritionalInfo(prev => ({ ...prev, value: text }))}
            />
          </View>
          <Button title="Add Nutritional Info" onPress={handleAddNutritionalInfo} color={ColorSheet.lightPrimary} />
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderCell}>Nutrient</Text>
              <Text style={styles.tableHeaderCell}>Value</Text>
            </View>
            {Object.entries(nutritionalInformation).map(([key, value]) => renderNutritionalInfoRow(key.charAt(0).toUpperCase() + key.slice(1), value))}
          </View>
        </View>
        <Button title="Submit Recipe" onPress={handleSubmit} color={ColorSheet.Primary} />
      </ScrollView>
    </SafeAreaView>
  );
};


export default AddRecipeScreen;
