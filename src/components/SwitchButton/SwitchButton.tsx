import { useState } from 'react'

interface SwitchButtonProps {
	label: string
}

export function SwitchButton({ label }: SwitchButtonProps) {
	const [isSelected, setIsSelected] = useState(false)

	return (
		<label className='flex py-1 px-2 w-fit gap-3 cursor-pointer'>
			{label && <span className='inline-block select-none'>{label}</span>}
			<input className='hidden' type='checkbox' onChange={() => setIsSelected(!isSelected)} />

			<span className='flex items-center gap-2 select-none'>
				<span className='relative inline-block border border-neutral-400 w-10 h-5 rounded-xl'>
					<span
						style={{ transition: 'left 0.2s' }}
						className={`relative inline-block border rounded-xl size-4
                        ${isSelected ? 'left-0.5 bg-neutral-600' : 'left-5 bg-sky-700'}`}
					/>
				</span>
			</span>
		</label>
	)
}
