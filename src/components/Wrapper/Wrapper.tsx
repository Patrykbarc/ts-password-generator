import { DefaultProps } from "../../utils/interfaces";

export function Wrapper({ children, className }: DefaultProps) {
  return (
    <div className={`mx-auto flex w-full max-w-[1400px] ${className}`}>
      {children}
    </div>
  );
}
