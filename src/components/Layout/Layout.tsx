import { Main } from '../../views/Main/Main'
import { Footer } from '../../views/Footer/Footer'
import { Hero } from '../../views/Hero/Hero'
export function Layout() {
	return (
		<>
			<Hero />
			<Main className='py-24' />
			<Footer />
		</>
	)
}
