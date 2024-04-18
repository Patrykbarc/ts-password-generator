import { GeneratorSettingsProps } from '../../utils/interfaces'

export function GeneratorPassLength({ settings, setSettings }: GeneratorSettingsProps) {
	const { passwordLength } = settings

	function handleSetPasswordLength(event: React.ChangeEvent<HTMLInputElement>) {
		setSettings(prevSettings => ({
			...prevSettings,
			passwordLength: parseInt(event.target.value),
		}))
	}

	return (
		<div className='mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row'>
			<div>
				Password Length: <b>{passwordLength}</b>
			</div>
			<input
				className='grow'
				type='range'
				min={6}
				max={50}
				value={passwordLength}
				onChange={handleSetPasswordLength}
			/>
		</div>
	)
}
