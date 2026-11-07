import Card from "../components/Card";
import InsightBar from "../components/InsightBar";
import TrendChart from "../components/TrendCharts";
import { useMeals } from "../hooks/useMeals";
import {
    analyzeMeals,
    getScore,
    getSuggestions,
} from "../logic/nutritionEngine";
import { getWeeklyTrend } from "../logic/trends";
import type { User } from "../types/user";

export default function Dashboard({ user }: { user: User }) {
  const { meals } = useMeals();

  // 🔍 Analyze data
  const data = analyzeMeals(meals);
  const score = getScore(data);
  const suggestions = getSuggestions(data);
  const trend = getWeeklyTrend(meals);

  // Convert values → percentage (safe UI scaling)
  const proteinPercent = Math.min(100, data.protein);
  const carbsPercent = Math.min(100, data.carbs);
  const ironPercent = Math.min(100, data.iron);

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Namaste,</p>
          <h2 className="text-lg font-semibold">{user.name}</h2>
        </div>

        <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full text-sm font-semibold shadow">
          {score}
        </div>
      </div>

      {/* EMPTY STATE */}
      {meals.length === 0 && (
        <div className="mt-6 text-sm text-gray-500 text-center">
          No meals added yet. Start by adding your meals in AI section.
        </div>
      )}

      {/* WEEKLY INSIGHTS */}
      <div className="mt-6">
        <Card title="Weekly Insights">
          <InsightBar
            label="Protein"
            value={proteinPercent}
            color="bg-green-500"
          />
          <InsightBar
            label="Carbs"
            value={carbsPercent}
            color="bg-yellow-400"
          />
          <InsightBar
            label="Iron"
            value={ironPercent}
            color="bg-red-400"
          />
        </Card>
      </div>

      {/* WEEKLY TREND */}
      <div className="mt-4">
        <Card title="Weekly Trend">
          {trend.length === 0 ? (
            <p className="text-sm text-gray-500">
              Add meals to see trends
            </p>
          ) : (
            <TrendChart data={trend} />
          )}
        </Card>
      </div>

      {/* SUGGESTIONS */}
      <div className="mt-4">
        <Card title="Low Cost Fixes">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s, i) => (
              <div
                key={i}
                className="bg-gray-100 px-3 py-1 rounded-lg text-xs"
              >
                {s}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}