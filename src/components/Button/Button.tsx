import React from 'react'

interface ButtonProps {
	children: React.ReactNode
	className?: string
	callback?: () => void
}

export function Button({ children, className, callback }: ButtonProps) {
	return (
		<button
			className={`px-3 py-2 bg-indigo-500 text-neutral-100 rounded-lg ${className}`}
			onClick={callback && (() => callback())}>
			{children}
		</button>
	)
}
