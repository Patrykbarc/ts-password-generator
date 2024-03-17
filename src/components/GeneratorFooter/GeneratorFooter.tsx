import { useState } from "react";
import { generatePassword } from "../../utils/generatePassword";
import { Button } from "../Button/Button";
import { PasswordGeneratorSettings } from "../../utils/interfaces";

export function GeneratorFooter({
  settings,
}: {
  settings: PasswordGeneratorSettings;
}) {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const [warningMessage, setWarningMessage] = useState("");

  function handleGeneratePassword() {
    const newPassword = generatePassword(settings);
    setGeneratedPassword(newPassword);
  }

  function copyToClipboard(event: React.MouseEvent<HTMLElement>) {
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

  return (
    <div className="footer">
      <Button className="w-full" callback={handleGeneratePassword}>
        Generate password
      </Button>
      {generatedPassword && (
        <p className="mt-3 m-0 text-break">
          {isCopied ? (
            <span className="generated-password-feedback">
              Copied to clipboard
            </span>
          ) : (
            <span className="generated-password" onClick={copyToClipboard}>
              {generatedPassword}
            </span>
          )}
        </p>
      )}

      {warningMessage && (
        <div className="mt-2">
          <small className="mt-4 text-warning text-opacity-75 fade-in">
            {warningMessage}
          </small>
        </div>
      )}
    </div>
  );
}
