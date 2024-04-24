import { useEffect, useState } from 'react'
import { options } from '../../constants/options'
import { GeneratorSettingsProps, PasswordGeneratorSettings } from '../../utils/interfaces'
import { SwitchButton } from '../SwitchButton/SwitchButton'

export function GeneratorOptions({ settings, setSettings }: GeneratorSettingsProps) {
	const [warning, setWarning] = useState(true)

	const { includeCapitalLetters, includeLetters, includeNumbers, includeSpecialChars } = settings
	const isDisabled =
		!includeCapitalLetters && !includeLetters && !includeNumbers && !includeSpecialChars

	function handleSetOptions(optionName: keyof PasswordGeneratorSettings) {
		setSettings(prevSettings => ({
			...prevSettings,
			[optionName]: !prevSettings[optionName],
		}))
	}

	useEffect(() => {
		setWarning(isDisabled)
	}, [settings, isDisabled])

	return (
		<div>
			<p>{warning}</p>
			<div
				className={`flex gap-2 sm:flex-row my-4 flex-wrap border-2 p-2 rounded-lg ${warning && 'border-red-300'}`}>
				{options.map(option => {
					return (
						<div className='w-full' key={option.value}>
							<SwitchButton
								label={option.name}
								checked={
									!!settings[option.value as keyof PasswordGeneratorSettings]
								}
								callback={() =>
									handleSetOptions(
										option.value as keyof PasswordGeneratorSettings
									)
								}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
