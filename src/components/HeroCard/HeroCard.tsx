import { DefaultProps } from '../../utils/interfaces'

export function HeroCard({ children, className }: DefaultProps) {
	return (
		<div
			className={`flex flex-col rounded-xl border-2 border-indigo-500 bg-indigo-50 p-8 ${className} max-w-xl`}>
			{children}
		</div>
	)
}
