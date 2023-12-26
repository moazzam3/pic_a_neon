import pic from 'src/assets/demo.jpg';

function Cards() {
	return (
		<>
			<div className='flex flex-col sm:flex-row gap-2 md:gap-8 items-center md:items-stretch justify-center'>
				<ColoredCard
					color='bg-warning-500'
					link='google.com'
					tagline='lorem impsum 123'
					pic={pic}
				/>
				<ColoredCard
					color='bg-primary-500'
					link='google.com'
					tagline='lorem impsum 123'
					pic={pic}
					scale={1.1}
				/>
				<ColoredCard
					color='bg-error-500'
					link='google.com'
					tagline='lorem impsum 123'
					pic={pic}
				/>
			</div>
		</>
	);
}

export default Cards;

interface ColoredCardProps {
	color: 'bg-primary-500' | 'bg-warning-500' | 'bg-success-500' | 'bg-error-500';
	tagline: string;
	pic: string;
	link: string;
	scale?: number;
}
function ColoredCard(props: ColoredCardProps) {
	const { color, tagline, pic, link, scale } = props;

	const getBackgroundColorClass = (color: string): string => {
		// purgecss ignore
		return color;
	};
	
	return (
		<a
			href={link}
			target='_self'
			rel='noopener noreferrer'
			className={`w-full max-w-xs p-6 rounded-lg  ${getBackgroundColorClass(
				color
			)} ${
				// purgecss ignore
				scale ? `scale-y-[${scale}]` : ''
			}`}
		>
			<img
				src={pic}
				alt='image'
				className=' w-full h-[340px] object-cover rounded-lg mb-6'
			/>
			<p className='min-h-[50px] text-center uppercase font-bold text-common-white'>
				{tagline}
			</p>
		</a>
	);
}
