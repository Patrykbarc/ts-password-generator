import { DefaultProps } from "../../utils/interfaces";

export function HeroCard({ children, className }: DefaultProps) {
  return (
    <div
      className={`flex h-fit min-w-[50%] flex-col gap-11 rounded-xl border-2 border-indigo-500 bg-indigo-50 p-12 ${className}`}
    >
      {children}
    </div>
  );
}
