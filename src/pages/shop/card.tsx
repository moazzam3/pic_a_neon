import CardImage from 'src/assets/surfer.jpg';
import Button from 'src/components/Button';

interface CardProps {
	tagline: string;
}

function Card(props: CardProps) {
	const { tagline } = props;
	return (
		<div className='relative w-full bg-white rounded-lg shadow-lg overflow-hidden'>
			<img src={CardImage} alt='' />
			<div className='absolute inset-0 h-full w-full bg-black/40 flex flex-col justify-end items-center p-4 gap-4'>
        <p className='text-white text-2xl capitalize text-center w-full'>{tagline}</p>
        <Button fullWidth variant='contained' size='lg'>View All</Button>
			</div>
		</div>
	);
}
export default Card;
