// components
import Button from 'src/components/Button';
import IconButton from 'src/components/IconButton';

// icons
import { IconShoppingBag } from '@tabler/icons-react';

// assets
import heroVideo from 'src/assets/demo.mp4';

const Hero = () => {
	return (
		<div className='relative min-h-full'>
			<video autoPlay loop muted className='w-full h-auto'>
				<source
					src={heroVideo}
					type='video/mp4'
					aria-label='video showcase neon signs'
				/>
				Your browser does not support the video tag.
			</video>
			<div className='px-4 absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center text-center'>
				<div className='flex-col gap-4'>
					<h1 className='hero-heading font-normal max-w-5xl'>
						<span>Turn Your Idea into an</span>
						<br /> <span className='neon-text text-white'>
							eye-catching
						</span>{' '}
						LED neon sign
					</h1>
					<div className='flex gap-4 justify-center'>
						<Button variant='outlined'>Design Your Own Neon</Button>
						<IconButton className='sm:hidden' color='primary'>
							<IconShoppingBag className='h-6 w-6' />
						</IconButton>
						<Button
							variant='contained'
						>
							Shop Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;