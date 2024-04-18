import { BackgroundImage } from '../../components/BackgroundImage/BackgroundImage'
import { Generator } from '../../components/Generator/Generator'
import { Wrapper } from '../../components/Wrapper/Wrapper'

export function Hero() {
	return (
		<div className='relative flex h-fit lg:h-screen bg-center py-24'>
			<BackgroundImage className='bg-fixed' backgroundFixed={true} />
			<Wrapper className='relative z-50 flex-col gap-10 sm:gap-20'>
				<div>
					<h1 className='mb-3 text-5xl font-black text-neutral-100 md:text-8xl md:mb-8'>
						Free Password Generator
					</h1>
					<h4 className='text-h4 font-light text-neutral-300 md:text-5xl'>
						Create safe and unique passwords 🔐
					</h4>
				</div>

				<div className='flex flex-col gap-3'>
					<Generator className='w-full' />
				</div>
			</Wrapper>
		</div>
	)
}
