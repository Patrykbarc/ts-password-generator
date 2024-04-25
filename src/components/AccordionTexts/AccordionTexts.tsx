interface AccordionTextsProps {
	isOpen: boolean
	texts: string
}

export function AccordionTexts({ isOpen, texts }: AccordionTextsProps) {
	return (
		<div
			style={
				isOpen
					? {
							maxHeight: '15rem',
							transition: 'max-height 500ms 300ms ease-out',
						}
					: {
							maxHeight: '0rem',
							transition: 'max-height 500ms ease-out',
						}
			}>
			<p className='pb-5 pt-3'>{texts}</p>
		</div>
	)
}
