type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-600 text-white py-3 rounded-lg font-medium"
    >
      {children}
    </button>
  );
}