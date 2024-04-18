import { DefaultProps } from "../../utils/interfaces";

export function HeroCard({ children, className }: DefaultProps) {
  return (
    <div
      className={`flex h-fit flex-col gap-6 rounded-xl border-2 border-indigo-500 bg-indigo-50 p-12 sm:gap-11 ${className} h-fit w-full lg:h-full lg:w-1/2`}
    >
      {children}
    </div>
  );
}
