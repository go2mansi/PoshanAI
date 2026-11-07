import { useEffect, useState } from "react";
import BottomNav from "./src/components/BottomNav";
import Layout from "./src/components/Layout";
import { useUser } from "./src/hooks/useUser";
import AI from "./src/screens/AI";
import Auth from "./src/screens/Auth";
import Dashboard from "./src/screens/Dashboard";
import Onboarding from "./src/screens/Onboarding";
import Profile from "./src/screens/Profile";
import Splash from "./src/screens/Splash";
import Tour from "./src/screens/Tour";

type Screen = "splash" | "auth" | "onboarding" | "tour" | "app";
type Tab = "home" | "ai" | "profile";

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [tab, setTab] = useState<Tab>("home");
  const { user, saveUser } = useUser();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) setScreen("app");
      else setScreen("auth");
    }, 3000);

    return () => clearTimeout(timer);
  }, [user]);

  if (screen === "splash") return <Splash />;

  if (screen === "auth")
    return <Auth onNext={() => setScreen("onboarding")} />;

  if (screen === "onboarding")
    return (
      <Onboarding
        onComplete={(u) => {
          saveUser(u);
          setScreen("tour");
        }}
      />
    );

  if (screen === "tour")
    return <Tour onDone={() => setScreen("app")} />;

  if (screen === "app" && user) {
    return (
      <Layout>
        {tab === "home" && <Dashboard user={user} />}
        {tab === "ai" && <AI />}
        {tab === "profile" && <Profile user={user} />}

        <BottomNav active={tab} setActive={setTab} />
      </Layout>
    );
  }

  return null;
}