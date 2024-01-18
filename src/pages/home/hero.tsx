import {Link } from 'react-router-dom'
// components
import Button from 'src/components/Button';

// assets
import heroVideo from 'src/assets/demo.mp4';
import { pages } from 'src/constants/page_routes';

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
					<div className='flex max-sm:flex-col gap-4 justify-center'>
						<Button variant='outlined' Link LinkComponent={Link} to={pages.neon_builder} className='hover:bg-primary-500 hover:text-white transition-colors'>
							Design Your Own Neon
						</Button>
						<Button Link variant='contained' LinkComponent={Link} to={pages.shop}>
							Shop Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
