import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Auth({ onNext }: { onNext: () => void }) {
  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-6">Welcome</h2>
      <p className="text-sm text-gray-500 mb-6">
        Continue to set up your nutrition profile
      </p>

      <Button onClick={onNext}>Continue</Button>
    </Layout>
  );
}