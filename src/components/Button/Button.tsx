import { DefaultProps } from '../../utils/interfaces'

interface ButtonProps extends DefaultProps {
	isDisabled?: boolean
}

export function Button({ children, className, callback, isDisabled }: ButtonProps) {
	return (
		<button
			className={`rounded-lg bg-indigo-500 px-3 py-2  font-semibold text-neutral-100 transition-colors hover:bg-indigo-600 ${className} disabled:bg-neutral-400 disabled:cursor-not-allowed`}
			disabled={isDisabled}
			onClick={callback && (() => callback())}>
			{children}
		</button>
	)
}
