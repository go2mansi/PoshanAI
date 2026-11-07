type Tab = "home" | "ai" | "profile";

export default function BottomNav({
  active,
  setActive,
}: {
  active: Tab;
  setActive: (t: Tab) => void;
}) {
  const itemClass = (tab: Tab) =>
    `flex-1 text-center py-2 ${
      active === tab ? "text-green-600 font-medium" : "text-gray-500"
    }`;

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto bg-white border-t flex">
      <button className={itemClass("home")} onClick={() => setActive("home")}>
        Home
      </button>
      <button className={itemClass("ai")} onClick={() => setActive("ai")}>
        AI
      </button>
      <button
        className={itemClass("profile")}
        onClick={() => setActive("profile")}
      >
        Profile
      </button>
    </div>
  );
}