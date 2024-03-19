import { useState } from "react";
import { GeneratorBody } from "../GeneratorBody/GeneratorBody";
import { GeneratorFooter } from "../GeneratorFooter/GeneratorFooter";
import {
  DefaultProps,
  PasswordGeneratorSettings,
} from "../../utils/interfaces";
import { HeroCard } from "../HeroCard/HeroCard";

export function Generator({ className }: DefaultProps) {
  const [settings, setSettings] = useState<PasswordGeneratorSettings>({
    passwordLength: 10,
    includeLetters: true,
    includeCapitalLetters: true,
    includeNumbers: false,
    includeSpecialChars: false,
  });

  return (
    <HeroCard className={className}>
      <GeneratorBody settings={settings} setSettings={setSettings} />
      <GeneratorFooter settings={settings} />
    </HeroCard>
  );
}
