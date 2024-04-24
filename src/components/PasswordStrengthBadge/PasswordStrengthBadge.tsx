import { useState, useEffect } from 'react'
import { PasswordGeneratorSettings } from '../../utils/interfaces'
import { evaluatePasswordStrength } from '../../utils/evaluatePasswordStrength'

type PasswordStrength = 'Very weak' | 'Weak' | 'Medium' | 'Strong' | 'Very strong'

export function PasswordStrengthBadge({ settings }: { settings: PasswordGeneratorSettings }) {
	const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>('Weak')

	useEffect(() => {
		const strength = evaluatePasswordStrength(settings)
		setPasswordStrength(strength)
	}, [settings])

	let badgeColor
	switch (passwordStrength) {
		case 'Very strong':
			badgeColor = 'bg-green-500'
			break
		case 'Strong':
			badgeColor = 'bg-blue-500'
			break
		case 'Medium':
			badgeColor = 'bg-yellow-500'
			break
		case 'Weak':
			badgeColor = 'bg-orange-500'
			break
		default:
			badgeColor = 'bg-red-500'
	}

	return (
		<h4 className='mb-6  font-semibold'>
			Password strength:{' '}
			<label className={`${badgeColor} rounded-md px-2 py-1 text-indigo-50`}>
				{passwordStrength}
			</label>
		</h4>
	)
}
