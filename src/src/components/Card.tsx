export default function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
      {title && (
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}