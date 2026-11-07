export type FoodItem = {
  name: string;
  protein: number;
  carbs: number;
  iron: number;
  calories: number;
};

export const foodDatabase: FoodItem[] = [
  { name: "rice", protein: 2.7, carbs: 28, iron: 0.2, calories: 130 },
  { name: "roti", protein: 3, carbs: 20, iron: 1.2, calories: 120 },
  { name: "dal", protein: 9, carbs: 20, iron: 3, calories: 150 },
  { name: "egg", protein: 6, carbs: 1, iron: 1.2, calories: 70 },
  { name: "milk", protein: 3.4, carbs: 5, iron: 0.1, calories: 60 },
  { name: "paneer", protein: 18, carbs: 2, iron: 0.2, calories: 265 },
  { name: "spinach", protein: 2.9, carbs: 3.6, iron: 2.7, calories: 23 },
  { name: "aloo", protein: 2, carbs: 17, iron: 0.8, calories: 77 },
  { name: "gahat", protein: 22, carbs: 57, iron: 6, calories: 320 },
  { name: "bhatt", protein: 24, carbs: 60, iron: 5, calories: 340 },
];