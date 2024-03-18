import { useState } from "react";
import { GeneratorBody } from "../GeneratorBody/GeneratorBody";
import { GeneratorFooter } from "../GeneratorFooter/GeneratorFooter";
import { PasswordGeneratorSettings } from "../../utils/interfaces";
import { HeroCard } from "../HeroCard/HeroCard";

export function Generator() {
  const [settings, setSettings] = useState<PasswordGeneratorSettings>({
    passwordLength: 10,
    includeLetters: true,
    includeCapitalLetters: true,
    includeNumbers: false,
    includeSpecialChars: false,
  });

  return (
    <HeroCard>
      <GeneratorBody settings={settings} setSettings={setSettings} />
      <GeneratorFooter settings={settings} />
    </HeroCard>
  );
}
