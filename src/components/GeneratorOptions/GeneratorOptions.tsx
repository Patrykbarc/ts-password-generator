import { options } from '../../constants/options'
import { GeneratorSettingsProps, PasswordGeneratorSettings } from '../../utils/interfaces'
import { SwitchButton } from '../SwitchButton/SwitchButton'

export function GeneratorOptions({ settings, setSettings }: GeneratorSettingsProps) {
	function handleSetOptions(optionName: keyof PasswordGeneratorSettings) {
		setSettings(prevSettings => ({
			...prevSettings,
			[optionName]: !prevSettings[optionName],
		}))
	}

	return (
		<div>
			<div className='flex gap-2 sm:flex-row my-4 flex-wrap border-2 p-2 rounded-lg'>
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
