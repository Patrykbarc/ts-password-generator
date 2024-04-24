import { useCallback, useEffect, useState } from 'react'
import { generatePassword } from '../../utils/generatePassword'
import { Button } from '../Button/Button'
import { PasswordGeneratorSettings } from '../../utils/interfaces'
import { copyToClipboard } from '../../utils/copyToClipboard'
import { SwitchButton } from '../SwitchButton/SwitchButton'

export function GeneratePassword({ settings }: { settings: PasswordGeneratorSettings }) {
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [isCopied, setIsCopied] = useState(false)
	const [isPasswordBlured, setIsPasswordBlured] = useState(true)

	const { includeCapitalLetters, includeLetters, includeNumbers, includeSpecialChars } = settings

	const handleGeneratePassword = useCallback(() => {
		const newPassword = generatePassword(settings)
		setGeneratedPassword(newPassword)
		setIsCopied(false)
	}, [settings])

	useEffect(() => {
		handleGeneratePassword()
	}, [handleGeneratePassword])

	const isDisabled =
		!includeCapitalLetters && !includeLetters && !includeNumbers && !includeSpecialChars && true

	return (
		<div>
			<Button
				className='w-full mb-4'
				callback={handleGeneratePassword}
				isDisabled={isDisabled}>
				Generate password
			</Button>

			<div
				className='cursor-pointer rounded-lg border bg-emerald-300 p-4 text-center transition-colors'
				onClick={event => copyToClipboard({ event, setIsCopied })}>
				<p>
					<span
						className={`break-all font-semibold ${isPasswordBlured ? 'blur-sm' : ''}`}>
						{generatedPassword}
					</span>
				</p>
			</div>

			<SwitchButton label='Show password' checked={false} callback={setIsPasswordBlured} />
		</div>
	)
}
