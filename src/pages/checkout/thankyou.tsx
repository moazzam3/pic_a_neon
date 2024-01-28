import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import { pages } from 'src/constants/page_routes';
import { IconCircleCheck } from '@tabler/icons-react';
function Thankyou() {
	return (
		<div>
			<div className='flex justify-center items-center mt-16'>
				<IconCircleCheck size={120} className='text-green-500'/>
			</div>
			<h1 className='capitalize text-2xl md:text-3xl lg:text-4xl text-center mt-8'>
				Order Confirmed!
			</h1>
			<p className='text-center'>Your order has been placed successfully</p>
			<div className='flex justify-center items-center mt-16'>
				<Button Link LinkComponent={Link} variant='contained' to={pages.shop}>
					Continue Shopping
				</Button>
			</div>
		</div>
	);
}

export default Thankyou;
