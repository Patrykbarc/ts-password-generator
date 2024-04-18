import { DefaultProps } from '../../utils/interfaces'

export function HeroCard({ children, className }: DefaultProps) {
	return (
		<div
			className={`flex flex-col gap-6 rounded-xl border-2 border-indigo-500 bg-indigo-50 p-12 sm:gap-11 ${className} w-full`}>
			{children}
		</div>
	)
}
