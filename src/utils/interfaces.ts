import { ReactNode } from "react";

export interface DefaultProps {
  children?: ReactNode;
  className?: string;
  callback?: () => void;
}

export interface PasswordGeneratorSettings {
  passwordLength: number;
  includeLetters: boolean;
  includeCapitalLetters: boolean;
  includeNumbers: boolean;
  includeSpecialChars: boolean;
}

export interface GeneratorBodyProps {
  settings: PasswordGeneratorSettings;
  setSettings: React.Dispatch<React.SetStateAction<PasswordGeneratorSettings>>;
}
