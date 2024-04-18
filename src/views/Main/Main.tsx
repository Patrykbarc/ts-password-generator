import { Accordion } from '../../components/Accordion/Accordion'
import { CardsSection } from '../../components/CardsSection/CardsSection'
import { Curiosities } from '../../components/Curiosities/Curiosities'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { DefaultProps } from '../../utils/interfaces'

export function Main({ className }: DefaultProps) {
	return (
		<Wrapper className={className}>
			<section className='flex flex-col gap-14'>
				<CardsSection />
				<hr />
				<Curiosities />
				<hr />
				<Accordion />
			</section>
		</Wrapper>
	)
}
