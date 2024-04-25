import { ReactNode } from 'react'

interface MainSectionProps {
	title: string
	text?: string
	children?: ReactNode
}

export function MainSection({ title, text, children }: MainSectionProps) {
	return (
		<section>
			<div>
				<h2 className='text-4xl font-bold text-indigo-500 mb-6'>{title}</h2>
				{text && <h5 className=' font-semibold'>{text}</h5>}
			</div>
			{children}
		</section>
	)
}
