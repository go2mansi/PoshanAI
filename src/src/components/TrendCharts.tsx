type Props = {
  data: {
    day: string;
    protein: number;
  }[];
};

export default function TrendChart({ data }: Props) {
  return (
    <div className="flex items-end gap-2 h-24 mt-4">
      {data.map((d, i) => (
        <div key={i} className="flex flex-col items-center text-xs">
          <div
            className="bg-green-500 w-4 rounded"
            style={{ height: `${d.protein}px` }}
          />
          <span className="text-[10px]">{d.day.slice(0, 5)}</span>
        </div>
      ))}
    </div>
  );
}