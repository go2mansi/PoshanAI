import { useEffect, useState } from "react";
import type { Meal } from "../types/meal";

export const useMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("meals");
    if (stored) setMeals(JSON.parse(stored));
  }, []);

  const addMeal = (items: string[]) => {
    const newMeal = {
      items,
      timestamp: Date.now(),
    };

    const updated = [...meals, newMeal];
    setMeals(updated);
    localStorage.setItem("meals", JSON.stringify(updated));
  };

  return { meals, addMeal };
};