import Card from "../components/Card";
import InsightBar from "../components/InsightBar";
import Layout from "../components/Layout";

export default function Insights() {
  return (
    <Layout>
      <h2 className="text-lg font-semibold mb-4">Weekly Insights</h2>

      <Card>
        <InsightBar label="Protein Intake" value={55} color="bg-green-500" />
        <InsightBar label="Carbs Intake" value={75} color="bg-yellow-400" />
        <InsightBar label="Iron Level" value={40} color="bg-red-400" />
      </Card>
    </Layout>
  );
}