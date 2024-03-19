import { DefaultProps } from "../../utils/interfaces";

export function Wrapper({ children, className }: DefaultProps) {
  return (
    <div
      className={`mx-auto my-auto flex w-full max-w-[1400px] px-14 lg:px-14 ${className}`}
    >
      {children}
    </div>
  );
}
