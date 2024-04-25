import { Accordion } from '../../components/Accordion/Accordion'
import { SecurityFactsSection } from '../../components/SecurityFactsSection/SecurityFactsSection'
import { SecurityTipsSection } from '../../components/SecurityTipsSection/SecurityTipsSection'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { DefaultProps } from '../../utils/interfaces'

export function Main({ className }: DefaultProps) {
	return (
		<main className='text-pretty text-neutral-700'>
			<Wrapper className={className}>
				<div className='flex flex-col gap-16'>
					<SecurityTipsSection />
					<SecurityFactsSection />
					<Accordion />
				</div>
			</Wrapper>
		</main>
	)
}
