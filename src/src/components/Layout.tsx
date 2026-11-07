export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-[360px] bg-white p-5">
        {children}
      </div>
    </div>
  );
}