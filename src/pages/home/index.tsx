// Components
import Hero from './hero';
import Description from './description';
import Cards from './cards';
import Features from './features';
import ImageGallery from './imageGallery';
import Informations from './information';
import Tabs from './tabs';
import SocialLinks from './socialLinks';

function Home() {
	return (
		<div className='flex flex-col'>
			<section>
				<Hero />
			</section>
			<section className='max-container'>
				<div className='px-8 lg:px-0 py-8 sm:py-12 md:py-16 xl:py-24 flex flex-col gap-8'>
					<Description />
					<Cards />
				</div>
			</section>
			<section className='bg-slate-200'>
				<div className='max-container'>
					<Features />
				</div>
			</section>
			<section className='max-container'>
				<div className='px-8 lg:px-0 sm:py-12 md:py-16 xl:py-24'>
					<ImageGallery />
				</div>
			</section>
			<section className='max-container'>
				<div className='px-8 lg:px-0 sm:py-12 md:py-16 xl:py-24'>
					<Informations />
				</div>
			</section>
			<section className='max-container'>
				<div className='px-8 lg:px-0 sm:py-12 md:py-16 xl:py-24'>
					<Tabs />
				</div>
			</section>
			<section className='max-container'>
				<div className='px-8 lg:px-0 sm:py-12 md:py-16 xl:py-24'>
					<SocialLinks />
				</div>
			</section>
		</div>
	);
}

export default Home;
