import React from 'react'

interface ButtonProps {
	children: React.ReactNode
	className?: string
	callback?: () => void
}

export function Button({ children, className, callback }: ButtonProps) {
	return (
		<button
			className={`text-h5 font-semibold px-3 py-2 bg-indigo-500 text-neutral-100 rounded-lg hover:bg-indigo-600 transition-colors ${className}`}
			onClick={callback && (() => callback())}>
			{children}
		</button>
	)
}
