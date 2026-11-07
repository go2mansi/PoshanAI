import { useState } from "react";
import Layout from "../components/Layout";
import { useMeals } from "../hooks/useMeals";
import { formatAIResponse } from "../logic/aiFormatter";
import { analyzeMeals } from "../logic/nutritionEngine";

export default function AI() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const { meals, addMeal } = useMeals();

  // Save meal
  const handleAdd = () => {
    if (!input) return;

    const items = input.split(",").map((i) => i.trim());
    addMeal(items);
    setInput("");
  };

  // Analyze meals
  const handleAnalyze = () => {
    const data = analyzeMeals(meals);
    const result = formatAIResponse(data);
    setOutput(result);
  };

  return (
    <Layout>
      <h2 className="text-lg font-semibold mb-4">
        AI Nutrition Assistant
      </h2>

      {/* Input */}
      <input
        placeholder="e.g. rice, dal"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full rounded-lg"
      />

      {/* Save Meal */}
      <button
        onClick={handleAdd}
        className="bg-green-600 text-white mt-3 w-full p-2 rounded-lg"
      >
        Save Meal
      </button>

      {/* Analyze */}
      <button
        onClick={handleAnalyze}
        className="bg-black text-white mt-2 w-full p-2 rounded-lg"
      >
        Analyze Diet
      </button>

      {/* Output */}
      {output && (
        <div className="mt-4 bg-gray-100 p-3 rounded-lg text-sm whitespace-pre-wrap">
          {output}
        </div>
      )}
    </Layout>
  );
}