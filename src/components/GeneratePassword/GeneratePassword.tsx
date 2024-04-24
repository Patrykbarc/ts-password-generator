import { useCallback, useEffect, useState } from 'react'
import { generatePassword } from '../../utils/generatePassword'
import { Button } from '../Button/Button'
import { PasswordGeneratorSettings } from '../../utils/interfaces'
import { copyToClipboard } from '../../utils/copyToClipboard'
import { SwitchButton } from '../SwitchButton/SwitchButton'
import { ClipboardIcon } from '@heroicons/react/24/outline'

export function GeneratePassword({ settings }: { settings: PasswordGeneratorSettings }) {
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [isPasswordBlured, setIsPasswordBlured] = useState(true)

	const { includeCapitalLetters, includeLetters, includeNumbers, includeSpecialChars } = settings
	const isDisabled =
		!includeCapitalLetters && !includeLetters && !includeNumbers && !includeSpecialChars

	const handleGeneratePassword = useCallback(() => {
		if (!isDisabled) {
			const newPassword = generatePassword(settings)
			setGeneratedPassword(newPassword)
		}
	}, [settings, isDisabled])

	useEffect(() => {
		handleGeneratePassword()
	}, [handleGeneratePassword])

	return (
		<div className='flex flex-col gap-4'>
			<Button className='w-full' callback={handleGeneratePassword} isDisabled={isDisabled}>
				Generate password
			</Button>

			<div
				className='cursor-pointer rounded-lg border bg-emerald-300 p-2 px-3 text-center transition-colors'
				onClick={event => copyToClipboard({ event })}>
				<div className='overflow-hidden items-center flex justify-between'>
					<div
						className={`break-all flex font-semibold truncate ${isPasswordBlured ? 'blur-sm' : ''}`}>
						{generatedPassword}
					</div>
					<div className='pl-3'>
						<ClipboardIcon className='size-5' />
					</div>
				</div>
			</div>

			<SwitchButton label='Show password' checked={false} callback={setIsPasswordBlured} />
		</div>
	)
}
