interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="w-1/4 rounded-2xl border-2 border-indigo-400 p-4 text-center">
      <h4 className="text-h4 font-semibold text-indigo-400">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
