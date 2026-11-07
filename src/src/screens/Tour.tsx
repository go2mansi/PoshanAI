import { useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

const steps = [
  "Use AI to get meal suggestions",
  "Track your weekly nutrition",
  "Get affordable healthy upgrades",
];

export default function Tour({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < steps.length - 1) setIndex(index + 1);
    else onDone();
  };

  return (
    <Layout>
      <div className="mt-20 text-center">
        <p className="text-lg">{steps[index]}</p>
      </div>

      <div className="mt-6">
        <Button onClick={next}>Next</Button>
      </div>
    </Layout>
  );
}