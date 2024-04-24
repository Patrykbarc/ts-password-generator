import { Dispatch, SetStateAction } from 'react'

interface CopyToClipboardArgs {
	event: React.MouseEvent<HTMLElement>
	setIsCopied: Dispatch<SetStateAction<boolean>>
}

export function copyToClipboard({ event, setIsCopied }: CopyToClipboardArgs) {
	const text = event.currentTarget.textContent
	try {
		text !== null && navigator.clipboard.writeText(text)
		setIsCopied(true)

		setTimeout(() => {
			setIsCopied(false)
		}, 2500)
	} catch (error) {
		setTimeout(() => {}, 3500)
	}
}
