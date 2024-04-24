import { useCallback, useEffect, useState } from 'react'
import { generatePassword } from '../../utils/generatePassword'
import { Button } from '../Button/Button'
import { PasswordGeneratorSettings } from '../../utils/interfaces'
import { copyToClipboard } from '../../utils/copyToClipboard'
import { SwitchButton } from '../SwitchButton/SwitchButton'


export function GeneratePassword({ settings }: { settings: PasswordGeneratorSettings }) {
	const [generatedPassword, setGeneratedPassword] = useState('')
	// const [isCopied, setIsCopied] = useState(false)
	const [isPasswordBlured, setIsPasswordBlured] = useState(true)

	const { includeCapitalLetters, includeLetters, includeNumbers, includeSpecialChars } = settings

	const handleGeneratePassword = useCallback(() => {
		const newPassword = generatePassword(settings)
		setGeneratedPassword(newPassword)
		// setIsCopied(false)
	}, [settings])

	useEffect(() => {
		handleGeneratePassword()
	}, [handleGeneratePassword])

	const isDisabled =
		!includeCapitalLetters && !includeLetters && !includeNumbers && !includeSpecialChars && true

	return (
		<div className='flex flex-col gap-4'>
			<Button className='w-full' callback={handleGeneratePassword} isDisabled={isDisabled}>
				Generate password
			</Button>

			<div
				className='cursor-pointer rounded-lg border bg-emerald-300 p-2 px-3 text-center transition-colors'
				onClick={event => copyToClipboard({ event })}>
				<div className='overflow-hidden'>
					<p>
						<span
							className={`break-all font-semibold truncate ${isPasswordBlured ? 'blur-sm' : ''}`}>
							{generatedPassword}
						</span>
					</p>
				</div>
			</div>

			<SwitchButton label='Show password' checked={false} callback={setIsPasswordBlured} />
		</div>
	)
}
