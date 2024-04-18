interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div
      className="group rounded-2xl border-2 border-indigo-400 p-4 text-center
     transition-colors hover:bg-indigo-400 hover:text-white group-hover:bg-indigo-400 md:w-1/4 cursor-default"
    >
      <h4 className="text-h4 font-semibold text-indigo-400 group-hover:text-white">
        {title}
      </h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
