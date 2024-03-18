import { DefaultProps } from "../../utils/interfaces";

export function Button({ children, className, callback }: DefaultProps) {
  return (
    <button
      className={`rounded-lg bg-indigo-500 px-3 py-2 text-h5 font-semibold text-neutral-100 transition-colors hover:bg-indigo-600 ${className}`}
      onClick={callback && (() => callback())}
    >
      {children}
    </button>
  );
}
