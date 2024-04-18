import { useCallback, useEffect, useState } from 'react'
import { generatePassword } from '../../utils/generatePassword'
import { Button } from '../Button/Button'
import { PasswordGeneratorSettings } from '../../utils/interfaces'
import { copyToClipboard } from '../../utils/copyToClipboard'

export function GeneratePassword({ settings }: { settings: PasswordGeneratorSettings }) {
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [isCopied, setIsCopied] = useState(false)
	const [warningMessage, setWarningMessage] = useState('')

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
				className='mb-8 w-full'
				callback={handleGeneratePassword}
				isDisabled={isDisabled}>
				Generate password
			</Button>

			<div
				className='cursor-pointer rounded-lg border bg-emerald-300 p-4 text-center transition-colors'
				onClick={event => copyToClipboard({ event, setIsCopied, setWarningMessage })}>
				<p>
					{isCopied ? (
						<span>Copied to clipboard</span>
					) : (
						<span className='break-all font-semibold'>{generatedPassword}</span>
					)}
				</p>
			</div>

			{warningMessage && (
				<div className='mt-2'>
					<small className='text-warning fade-in mt-4 text-opacity-75'>
						{warningMessage}
					</small>
				</div>
			)}
		</div>
	)
}