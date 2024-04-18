import { Dispatch, SetStateAction } from "react";

interface CopyToClipboardArgs {
  event: React.MouseEvent<HTMLElement>;
  setIsCopied: Dispatch<SetStateAction<boolean>>;
  setWarningMessage: Dispatch<SetStateAction<string>>;
}

export function copyToClipboard({
  event,
  setIsCopied,
  setWarningMessage,
}: CopyToClipboardArgs) {
  const text = event.currentTarget.textContent;
  try {
    text !== null && navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
      setWarningMessage("");
    }, 2500);
  } catch (error) {
    setWarningMessage("Failed to copy to clipboard");

    setTimeout(() => {
      setWarningMessage("");
    }, 3500);
  }
}
