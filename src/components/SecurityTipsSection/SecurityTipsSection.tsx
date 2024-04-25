import { MainSection } from '../MainSection/MainSection'
import { cardsData } from '../../constants/cardsData'
import { Card } from '../../components/Card/Card'

const tipsSection = {
	title: 'What makes a password strong?',
	text: 'A strong password typically includes a combination of uppercase and lowercase letters, numbers, and special characters, which increase its complexity and make it more difficult to crack. Additionally, a strong password should not contain easily guessed elements, such as common words, predictable sequences, or personal information.',
}

export function SecurityTipsSection() {
	return (
		<MainSection title={tipsSection.title} text={tipsSection.text}>
			<div className='flex flex-col gap-4 md:flex-row mt-8'>
				{cardsData.map(card => {
					return (
						<Card
							key={card.title + card.description}
							title={card.title}
							description={card.description}
						/>
					)
				})}
			</div>
		</MainSection>
	)
}
