import { BackgroundImage } from '../../components/BackgroundImage/BackgroundImage'
import { Generator } from '../../components/Generator/Generator'
import { Wrapper } from '../../components/Wrapper/Wrapper'

export function Hero() {
	return (
		<div className='relative flex h-fit lg:h-[80dvh] bg-center py-24'>
			<BackgroundImage className='bg-fixed' backgroundFixed={true} />
			<Wrapper className='relative grid grid-cols-2 max-w-[1500px] z-50 gap-10 sm:gap-20'>
				<div>
					<h1 className='mb-3 text-6xl font-black text-neutral-100 md:mb-8'>
						Free Password Generator
					</h1>
					<h4 className='font-light text-neutral-300 text-3xl max-w-xl'>
						Create strong, unique passwords with our easy-to-use password generator.
						Never worry about forgetting or compromising your passwords again. 🔐
					</h4>
				</div>

				<div className='flex flex-col gap-3'>
					<Generator className='w-full' />
				</div>
			</Wrapper>
		</div>
	)
}
