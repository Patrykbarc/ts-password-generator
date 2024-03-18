import { DefaultProps } from "../../utils/interfaces";

export function HeroCard({ children }: DefaultProps) {
  return (
    <div className="flex w-1/2 flex-col gap-11 rounded-xl border-2 border-indigo-500 bg-indigo-50 p-12">
      {children}
    </div>
  );
}
