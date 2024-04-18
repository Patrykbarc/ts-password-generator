import { Main } from '../../views/Main/Main'
import { Footer } from '../../views/Footer/Footer'
import { Hero } from '../../views/Hero/Hero'
export function Layout() {
	return (
		<div className='text-pretty text-neutral-700'>
			<main>
				<Hero />
				<Main className='py-24' />
			</main>

			<Footer />
		</div>
	)
}
