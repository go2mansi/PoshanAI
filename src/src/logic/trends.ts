import type { Meal } from "../types/meal";
import { analyzeMeals } from "./nutritionEngine";

export function getLast7DaysMeals(meals: Meal[]) {
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;

  return meals.filter((m) => m.timestamp >= weekAgo);
}

export function getWeeklyTrend(meals: Meal[]) {
  const last7 = getLast7DaysMeals(meals);

  const grouped: { [day: string]: Meal[] } = {};

  last7.forEach((meal) => {
    const day = new Date(meal.timestamp).toLocaleDateString();
    if (!grouped[day]) grouped[day] = [];
    grouped[day].push(meal);
  });

  return Object.entries(grouped).map(([day, meals]) => {
    const data = analyzeMeals(meals);
    return {
      day,
      protein: data.protein,
      carbs: data.carbs,
      iron: data.iron,
    };
  });
}