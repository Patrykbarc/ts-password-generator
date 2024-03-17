import { useState } from 'react'
import { GeneratorBody } from '../GeneratorBody/GeneratorBody'
import { GeneratorFooter } from '../GeneratorFooter/GeneratorFooter'
import { PasswordGeneratorSettings } from '../../utils/interfaces'

export function Generator() {
	const [settings, setSettings] = useState<PasswordGeneratorSettings>({
		passwordLength: 10,
		includeLetters: true,
		includeCapitalLetters: true,
		includeNumbers: false,
		includeSpecialChars: false,
	})

	return (
		<div className='flex flex-col bg-indigo-50 border-2 border-indigo-500 rounded-xl p-12 gap-11'>
			<GeneratorBody settings={settings} setSettings={setSettings} />
			<GeneratorFooter settings={settings} />
		</div>
	)
}
