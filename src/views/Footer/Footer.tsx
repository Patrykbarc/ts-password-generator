import { BackgroundImage } from '../../components/BackgroundImage/BackgroundImage'
import { Wrapper } from '../../components/Wrapper/Wrapper'

export function Footer() {
	return (
		<>
			<footer className='relative text-neutral-100'>
				<BackgroundImage backgroundFixed={true} />
				<Wrapper className='relative z-50 flex flex-col gap-8 py-8'>
					<p className='font-semibold'>
						Copyright © Patryk Barć | 2024. All rights reserved.
					</p>
				</Wrapper>
			</footer>
		</>
	)
}
