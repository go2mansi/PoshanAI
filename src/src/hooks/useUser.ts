import { useEffect, useState } from "react";
import type { User } from "../types/user";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const saveUser = (data: User) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  return { user, saveUser };
};