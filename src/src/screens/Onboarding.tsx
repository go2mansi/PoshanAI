import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";
import type { User } from "../types/user";

export default function Onboarding({
  onComplete,
}: {
  onComplete: (u: User) => void;
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState<User["goal"]>("maintain");

  const handleSubmit = () => {
    if (!name || !age || !weight) return;

    onComplete({
      name,
      age: Number(age),
      weight: Number(weight),
      goal,
    });
  };

  return (
    <Layout>
      <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

      <Input placeholder="Name" value={name} onChange={setName} />
      <div className="h-3" />

      <Input placeholder="Age" value={age} onChange={setAge} />
      <div className="h-3" />

      <Input placeholder="Weight (kg)" value={weight} onChange={setWeight} />
      <div className="h-3" />

      <select
        className="w-full border p-3 rounded-lg"
        value={goal}
        onChange={(e) => setGoal(e.target.value as User["goal"])}
      >
        <option value="maintain">Maintain</option>
        <option value="gain">Weight Gain</option>
        <option value="lose">Weight Loss</option>
      </select>

      <div className="h-4" />
      <Button onClick={handleSubmit}>Continue</Button>
    </Layout>
  );
}