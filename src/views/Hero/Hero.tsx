import { BackgroundImage } from '../../components/BackgroundImage/BackgroundImage'
import { Generator } from '../../components/Generator/Generator'
import { HeroText } from '../../components/HeroText/HeroText'
import { Wrapper } from '../../components/Wrapper/Wrapper'

export function Hero() {
	return (
		<div className='relative flex h-fit lg:h-[80dvh] bg-center py-24'>
			<BackgroundImage className='bg-fixed' backgroundFixed={true} />
			<Wrapper className='relative grid grid-cols-1 md:grid-cols-2 max-w-[1500px] z-50 gap-10 sm:gap-20'>
				<div>
					<HeroText />
				</div>
				<div>
					<Generator className='w-full' />
				</div>
			</Wrapper>
		</div>
	)
}
