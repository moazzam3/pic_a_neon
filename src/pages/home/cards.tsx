import {Link} from 'react-router-dom'
import pic from 'src/assets/demo.jpg';
import { pages } from 'src/constants/page_routes';

function Cards() {
	return (
		<>
			<div className='flex flex-col sm:flex-row gap-2 md:gap-8 items-center md:items-stretch justify-center'>
				<ColoredCard
					className='bg-warning-500 hover:shadow-warning-300'
					link={pages.neon_builder}
					tagline='Online Design Tool'
					pic={pic}
				/>
				<ColoredCard
					className='bg-primary-500 hover:shadow-primary-300'
					link={pages.neon_builder}
					tagline='Business and logos'
					pic={pic}
					scale={1.1}
				/>
				<ColoredCard
					className='bg-error-500 hover:shadow-error-300'
					link={pages.shop}
					tagline='Our Store'
					pic={pic}
				/>
			</div>
		</>
	);
}

export default Cards;

interface ColoredCardProps {
	className: string;
	tagline: string;
	pic: string;
	link: string;
	scale?: number;
}
function ColoredCard(props: ColoredCardProps) {
	const { className, tagline, pic, link, scale } = props;

	
	return (
		<Link
			to={link}
			target='_self'
			rel='noopener noreferrer'
			className={`w-full max-w-xs p-6 rounded-lg hover:shadow-2xl transition-shadow duration-150 ease-in ${className} ${scale ? `scale-y-110` : ''}`}
		>
			<img
				src={pic}
				alt='image'
				className=' w-full h-[340px] object-cover rounded-lg mb-6'
			/>
			<p className='min-h-[50px] text-center uppercase font-bold leading-8 text-white text-xl'>
				{tagline}
			</p>
		</Link>
	);
}
