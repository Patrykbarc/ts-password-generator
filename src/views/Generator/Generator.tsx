import { useState } from 'react'
import { GeneratorBody } from '../../components/GeneratorBody/GeneratorBody'
import { GeneratorFooter } from '../../components/GeneratorFooter/GeneratorFooter'
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
		<div className='bg-indigo-50 border-2 border-indigo-500 w-1/2 rounded-xl p-12'>
			<GeneratorBody settings={settings} setSettings={setSettings} />
			<GeneratorFooter settings={settings} />
		</div>
	)
}
