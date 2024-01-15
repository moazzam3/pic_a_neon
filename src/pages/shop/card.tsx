import { Link } from 'react-router-dom'

// project
import Button from 'src/components/Button';
import config from 'src/config';
import { pages } from 'src/constants/page_routes';


function Card(props) {

	return (
		<div className='relative w-full bg-white rounded-lg shadow-lg overflow-hidden'>
			<img src={config.imageBaseURL + props.product.image_path} alt={props.product.name} />
			<div className='absolute inset-0 h-full w-full bg-black/40 flex flex-col justify-end items-center p-4 gap-4'>
        <p className='text-white text-xl capitalize text-center w-full'>{props.product.name}</p>
        <Button fullWidth variant='contained' size='lg' Link LinkComponent={Link} to={pages.collections + '/' + props.product.id}>View All</Button>
			</div>
		</div>
	);
}
export default Card;
