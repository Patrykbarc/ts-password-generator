import React from "react";
import {
  GeneratorBodyProps,
  PasswordGeneratorSettings,
} from "../../utils/interfaces";
import { PasswordStrengthBadge } from "../PasswordStrengthBadge/PasswordStrengthBadge";
import { options } from "../../constants/options";

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
      <PasswordStrengthBadge {...settings} />
      <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row">
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
      <div className="flex flex-col gap-4 sm:flex-row">
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
