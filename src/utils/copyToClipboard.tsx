import { toast } from 'react-hot-toast'

interface CopyToClipboardArgs {
	event: React.MouseEvent<HTMLElement>
}

export function copyToClipboard({ event }: CopyToClipboardArgs) {
	const text = event.currentTarget.textContent
	try {
		text !== null && navigator.clipboard.writeText(text)
		toast.success('Copied to cliboard')
	} catch (error) {
		setTimeout(() => {}, 3500)
		console.error(error)
		toast.error('Something went wrong 😐')
	}
}
