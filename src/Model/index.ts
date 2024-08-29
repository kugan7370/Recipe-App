import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
  }
  
  export interface NutritionalInformation {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    fiber: number;
    sugar: number;
  }
  
  export interface Recipe {
    title: string;
    description: string;
    instructions: string;
    cuisine_type: string;
    meal_type: string;
    recipe_image: string;
    created_by: number;
    ingredients: Ingredient[];
    nutritional_information: NutritionalInformation;
  }
  
  export interface RecipeScreenProps {
    route: {
      params: {
        recipe: Recipe;
      };
    };
  }


  // types.ts


// Define your navigation stack
export type RootStackParamList = {
  HomeScreen: undefined;
  SearchScreen: { focusSearchInput: boolean };
  Details: { item: any };
  // Add other screens and their params here
};

// Define the navigation prop type for your screens
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
export type SearchScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SearchScreen'>;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;
