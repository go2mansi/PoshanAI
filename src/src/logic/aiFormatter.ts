export function formatAIResponse(data: {
  protein: number;
  carbs: number;
  iron: number;
}) {
  let response = "";

  if (data.protein < 50) {
    response += "Protein intake is low. Consider adding dal, egg, or paneer.\n";
  }

  if (data.iron < 10) {
    response += "Iron intake is insufficient. Add spinach or bhatt.\n";
  }

  if (data.carbs > 200) {
    response += "Carbohydrates are high. Reduce rice or roti.\n";
  }

  if (!response) {
    response = "Your diet looks balanced. Keep it up.";
  }

  return response;
}