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