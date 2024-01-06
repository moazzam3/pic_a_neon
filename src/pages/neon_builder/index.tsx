import Description from './description';
import Features from './features';
import NeonBilder from './neon_builder';

function NeonBuilderPage() {
	return (
		<div>
			<div className='max-container'>
				<h1 className='capitalize text-2xl md:text-3xl lg:text-4xl text-center mt-8 text-primary-500'>
					Design your own neon
				</h1>
				<section className='px-8 lg:px-4 py-8 sm:py-10 md:py-12'>
					<NeonBilder />
				</section>
				<section className='px-8 lg:px-4 py-8 sm:py-10 md:py-12'>
					<Description />
				</section>
			</div>
			<section className='px-8 lg:px-4 py-8 sm:py-10 md:py-12 gradient-primary'>
				<div className='max-container'>
					<Features />
				</div>
			</section>
		</div>
	);
}

export default NeonBuilderPage;
