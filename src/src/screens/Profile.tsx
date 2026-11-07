import Layout from "../components/Layout";
import type { User } from "../types/user";

export default function Profile({ user }: { user: User }) {
  return (
    <Layout>
      <h2 className="text-lg font-semibold mb-4">Profile</h2>

      <div className="space-y-2 text-sm">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Weight:</strong> {user.weight} kg</p>
        <p><strong>Goal:</strong> {user.goal}</p>
      </div>
    </Layout>
  );
}