export interface User {
  name: string;
  age: number;
  weight: number;
  goal: "gain" | "lose" | "maintain";
}