import { PasswordGeneratorSettings } from './interfaces'

export function evaluatePasswordStrength(passwordConfig: PasswordGeneratorSettings) {
	const {
		includeCapitalLetters,
		includeLetters,
		includeNumbers,
		includeSpecialChars,
		passwordLength,
	} = passwordConfig

	let strengthScore = 0

	if (includeLetters && includeCapitalLetters) {
		strengthScore += 3 // Punkty za obecność zarówno małych, jak i dużych liter
	} else if (includeLetters) {
		strengthScore += 1 // Punkty tylko za małe litery
	}

	if (includeNumbers) {
		strengthScore += 2 // Punkty za liczby
	}

	if (includeSpecialChars) {
		strengthScore += 4 // Punkty za znaki specjalne
	}

	// Punkty za długość hasła
	if (passwordLength >= 12) {
		strengthScore += 3
	} else if (passwordLength >= 10) {
		strengthScore += 2
	} else if (passwordLength >= 8) {
		strengthScore += 1
	}

	// Brak punktów
	if (!includeCapitalLetters && !includeLetters && !includeNumbers && !includeSpecialChars) {
		strengthScore = 0
	}

	// Ocenianie siły hasła na podstawie zgromadzonych punktów
	if (strengthScore >= 10) {
		return 'Very strong' // Bardzo mocne
	} else if (strengthScore >= 7) {
		return 'Strong' // Mocne
	} else if (strengthScore >= 4) {
		return 'Medium' // Średnie
	} else if (strengthScore >= 2) {
		return 'Weak' // Słabe
	} else {
		return 'Very weak' // Bardzo słabe
	}
}
