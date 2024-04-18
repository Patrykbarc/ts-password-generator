import { useState } from 'react'
import { GeneratorOptions } from '../GeneratorOptions/GeneratorOptions'
import { GeneratorFooter } from '../GeneratorFooter/GeneratorFooter'
import { DefaultProps, PasswordGeneratorSettings } from '../../utils/interfaces'
import { HeroCard } from '../HeroCard/HeroCard'
import { PasswordStrengthBadge } from '../PasswordStrengthBadge/PasswordStrengthBadge'
import { GeneratorPassLength } from '../GeneratorPassLength/GeneratorPassLength'

export function Generator({ className }: DefaultProps) {
	const [settings, setSettings] = useState<PasswordGeneratorSettings>({
		passwordLength: 10,
		includeLetters: true,
		includeCapitalLetters: true,
		includeNumbers: false,
		includeSpecialChars: false,
	})

	return (
		<HeroCard className={className}>
			<div>
				<PasswordStrengthBadge settings={settings} />
				<GeneratorPassLength settings={settings} setSettings={setSettings} />
				<GeneratorOptions settings={settings} setSettings={setSettings} />
			</div>
			<GeneratorFooter settings={settings} />
		</HeroCard>
	)
}
