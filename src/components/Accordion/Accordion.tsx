import { Fragment, useState } from 'react'
import { accordionData } from '../../constants/accordionData'
import { MainSection } from '../MainSection/MainSection'
import { AccordionTexts } from '../AccordionTexts/AccordionTexts'
import { AccordionHeaders } from '../AccordionHeaders/AccordionHeaders'

export function Accordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	function handleSectionFold(index: number) {
		setOpenIndex(prevIndex => (prevIndex === index ? null : index))
	}

	return (
		<section>
			<MainSection title='Frequently asked questions'>
				{accordionData.map((data, index) => {
					const isOpen = openIndex === index

					return (
						<Fragment key={data.title}>
							<div className='flex flex-col overflow-hidden border-t-2 py-3 last-of-type:border-b-2'>
								<AccordionHeaders
									isOpen={isOpen}
									titles={data.title}
									index={index}
									callback={handleSectionFold}
								/>

								<AccordionTexts isOpen={isOpen} texts={data.description} />
							</div>
						</Fragment>
					)
				})}
			</MainSection>
		</section>
	)
}
