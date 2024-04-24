import { Dispatch, SetStateAction, useState } from 'react'

interface SwitchButtonProps {
	label?: string
	direction?: 'horizontal' | 'vertical'
	checked?: boolean
	callback: Dispatch<SetStateAction<boolean>>
}

export function SwitchButton({
	label = 'Label',
	direction = 'horizontal',
	checked = true,
	callback,
}: SwitchButtonProps) {
	const [isSelected, setIsSelected] = useState<boolean>(checked)

	const directionStyle = direction === 'vertical' ? 'flex-col' : 'flex-row items-center'
	const isButtonSelectedStyle = !isSelected ? 'left-0.5 bg-neutral-500' : 'left-5 bg-indigo-500'

	return (
		<label
			className={`flex w-full justify-between py-1 px-2 gap-3 cursor-pointer ${directionStyle}`}>
			{label && <span className='inline-block select-none'>{label}</span>}
			<input
				className='hidden'
				type='checkbox'
				onChange={() => {
					setIsSelected(!isSelected)
					callback(isSelected)
				}}
			/>

			<span className='flex items-center gap-2 select-none'>
				<span className='relative inline-block border border-neutral-400 w-10 h-5 rounded-xl bg-indigo-50'>
					<span
						style={{ transition: 'left 0.2s' }}
						className={`relative inline-block border rounded-xl size-4
                        ${isButtonSelectedStyle}`}
					/>
				</span>
			</span>
		</label>
	)
}
