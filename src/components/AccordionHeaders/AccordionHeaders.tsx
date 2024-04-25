import { PlusCircleIcon } from '@heroicons/react/24/solid'

interface AccordionHeadersProps {
	isOpen: boolean
	titles: string
	index: number
	callback: (arg: number) => void
}

export function AccordionHeaders({ isOpen, titles, index, callback }: AccordionHeadersProps) {
	return (
		<div
			className={`flex cursor-pointer justify-between group hover:text-indigo-500 ${isOpen ? 'text-indigo-400' : ''}`}
			onClick={() => callback(index)}>
			<h4 className='font-semibold text-xl'>{titles}</h4>
			<PlusCircleIcon
				className={`h-12 hidden lg:block text-neutral-700 transition-transform duration-500 ${isOpen ? 'rotate-45 fill-indigo-400' : ''} group-hover:fill-indigo-500`}
			/>
		</div>
	)
}
