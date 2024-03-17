import React from "react";
import { PasswordGeneratorSettings } from "../../utils/interfaces";

interface GeneratorBodyProps {
  settings: PasswordGeneratorSettings;
  setSettings: React.Dispatch<React.SetStateAction<PasswordGeneratorSettings>>;
}

const options = [
  {
    name: "Letters",
    value: "includeLetters",
  },
  {
    name: "Capital letters",
    value: "includeCapitalLetters",
  },
  {
    name: "Numbers",
    value: "includeNumbers",
  },
  {
    name: "Special chars",
    value: "includeSpecialChars",
  },
];

export function GeneratorBody({ settings, setSettings }: GeneratorBodyProps) {
  const { passwordLength } = settings;

  function handleSetPasswordLength(event: React.ChangeEvent<HTMLInputElement>) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      passwordLength: parseInt(event.target.value),
    }));
  }

  function handleSetOptions(optionName: keyof PasswordGeneratorSettings) {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [optionName]: !prevSettings[optionName],
    }));
  }

  return (
    <div>
      <h4 className="mb-6 text-h4 font-semibold">
        Password strength:{" "}
        <label className="bg-red-500 px-2 text-indigo-50">Weak</label>
      </h4>
      <div className="mb-10 flex gap-4">
        <div>
          Password Length: <b>{passwordLength}</b>
        </div>
        <input
          className="grow"
          type="range"
          min={6}
          max={50}
          value={passwordLength}
          onChange={handleSetPasswordLength}
        />
      </div>
      <div className="flex gap-4">
        {options.map((option) => {
          return (
            <label key={option.value}>
              <input
                type="checkbox"
                value={option.value}
                className="mr-2"
                checked={
                  !!settings[option.value as keyof PasswordGeneratorSettings]
                }
                onChange={() =>
                  handleSetOptions(
                    option.value as keyof PasswordGeneratorSettings,
                  )
                }
              />
              {option.name}
            </label>
          );
        })}
      </div>
    </div>
  );
}
