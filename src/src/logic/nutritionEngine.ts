import { foodDatabase } from "../logic/foodData";
import type { Meal } from "../types/meal";

// Normalize
function normalize(text: string) {
  return text.trim().toLowerCase();
}

// Match food
function findFood(item: string) {
  const normalizedItem = normalize(item);

  return foodDatabase.find((f) =>
    normalizedItem.includes(f.name)
  );
}

// MAIN ANALYSIS
export function analyzeMeals(meals: Meal[]) {
  let protein = 0;
  let carbs = 0;
  let iron = 0;
  let calories = 0;

  meals.forEach((meal) => {
    meal.items.forEach((item) => {
      const food = findFood(item);
      if (food) {
        protein += food.protein;
        carbs += food.carbs;
        iron += food.iron;
        calories += food.calories;
      }
    });
  });

  return {
    protein: Math.round(protein),
    carbs: Math.round(carbs),
    iron: Math.round(iron),
    calories: Math.round(calories),
  };
}


// SCORE CALCULATION

export function getScore(data: {
  protein: number;
  carbs: number;
  iron: number;
  calories: number;
}) {
  let score = 50;

  // Protein logic
  if (data.protein >= 50) score += 20;
  else if (data.protein < 20) score -= 10;

  // Iron logic
  if (data.iron >= 10) score += 15;
  else if (data.iron < 5) score -= 10;

  // Carb balance
  if (data.carbs > 250) score -= 10;

  // Clamp 0–100
  return Math.max(0, Math.min(100, score));
}


// SUGGESTIONS ENGINE

export function getSuggestions(data: {
  protein: number;
  carbs: number;
  iron: number;
  calories: number;
}) {
  const suggestions: string[] = [];

  if (data.protein < 30) {
    suggestions.push("Add protein sources like dal, egg, paneer");
  }

  if (data.iron < 8) {
    suggestions.push("Include iron-rich foods like spinach or bhatt");
  }

  if (data.carbs > 250) {
    suggestions.push("Reduce rice or roti quantity");
  }

  if (data.calories < 1200) {
    suggestions.push("Increase overall food intake");
  }

  if (suggestions.length === 0) {
    suggestions.push("Your diet looks balanced");
  }

  return suggestions;
}