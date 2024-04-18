import { cardsData } from '../../constants/cardsData'
import { Card } from '../Card/Card'

export function CardsSection() {
	return (
		<div>
			<div className='mb-10'>
				<h2 className='text-h2 font-bold text-indigo-500'>What makes a password strong?</h2>
				<h5 className='text-h5 font-semibold'>
					A strong password typically includes a combination of uppercase and lowercase
					letters, numbers, and special characters, which increase its complexity and make
					it more difficult to crack. Additionally, a strong password should not contain
					easily guessed elements, such as common words, predictable sequences, or
					personal information.
				</h5>
			</div>
			<div className='flex flex-col gap-4 md:flex-row'>
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
		</div>
	)
}
