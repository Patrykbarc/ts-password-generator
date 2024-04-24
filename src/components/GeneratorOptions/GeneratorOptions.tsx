import { options } from '../../constants/options'
import { GeneratorSettingsProps, PasswordGeneratorSettings } from '../../utils/interfaces'

export function GeneratorOptions({ settings, setSettings }: GeneratorSettingsProps) {
	function handleSetOptions(optionName: keyof PasswordGeneratorSettings) {
		setSettings(prevSettings => ({
			...prevSettings,
			[optionName]: !prevSettings[optionName],
		}))
	}

	return (
		<div>
			<div className='flex flex-col gap-4 sm:flex-row my-4'>
				{options.map(option => {
					return (
						<label key={option.value}>
							<input
								type='checkbox'
								value={option.value}
								className='mr-2'
								checked={
									!!settings[option.value as keyof PasswordGeneratorSettings]
								}
								onChange={() =>
									handleSetOptions(
										option.value as keyof PasswordGeneratorSettings
									)
								}
							/>
							{option.name}
						</label>
					)
				})}
			</div>
		</div>
	)
}
