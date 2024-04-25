import { MainSection } from '../MainSection/MainSection'

const factsSection = {
	title: 'Did you know that?',
	text: 'Using long and complex passwords, makes them much harder to crack? Nowadays, brute force attacks are becoming less and less effective thanks to advanced algorithms and security requirements. The length of a password and its complexity, i.e. the variety of characters used, can make it take tens or even hundreds of years to crack such a password by brute force 🔨',
}

export function SecurityFactsSection() {
	return <MainSection title={factsSection.title} text={factsSection.text} />
}
