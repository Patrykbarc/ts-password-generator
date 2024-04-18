export function Curiosities() {
	return (
		<div>
			<h2 className='text-h2 font-bold text-indigo-500'>Did you know that?</h2>
			<div className='flex flex-col gap-5'>
				<p className='text-h5 font-semibold'>
					Using long and complex passwords, makes them much harder to crack?
				</p>
				<p className='text-h5 font-semibold'>
					Nowadays, brute force attacks are becoming less and less effective thanks to
					advanced algorithms and security requirements.
				</p>
				<p className='text-h5 font-semibold'>
					The length of a password and its complexity, i.e. the variety of characters
					used, can make it take tens or even hundreds of years to crack such a password
					by <strong>brute force</strong> 🔨
				</p>
			</div>
		</div>
	)
}
