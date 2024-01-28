import { useMemo, useState } from 'react';

// components
import { Link } from 'react-router-dom';
import useCart from 'src/cart/hooks';
import config from 'src/config';
import { pages } from 'src/constants/page_routes';
import CheckoutForm from './form';

function Checkout() {
	const { cartItems } = useCart();
	const [isRushOrder, setIsRushOrder] = useState(false);


	const total = useMemo(() => {
		return cartItems.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);
	}, [cartItems]);
	return (
		<div className='grid grid-col-1 lg:grid-cols-2'>
			<div className='max-container py-8 px-8 h-screen flex flex-col'>
				<div>
					<h1 className='capitalize text-2xl mt-8 text-primary-500'>
						Delivery
					</h1>
				</div>
				<CheckoutForm />
			</div>
			<div className='pt-12 bg-black px-12 flex flex-col gap-8 w-full text-white'>
				{cartItems.map((item) => {
					return (
						<div
							key={item.id}
							className='flex items-center gap-4 w-full text-white bg-gray-900 p-4 rounded-sm shadow-sm shadow-primary-200'
						>
							<div className='w-[30%] rounded-sm overflow-hidden'>
								<img
									height={100}
									width={100}
									src={config.imageBaseURL + item.image_path}
								/>
							</div>
							<div className='w-[70%] flex justify-between gap-2'>
								<Link
									to={pages.productDetails + `/${item.slug}`}
									className='hover:underline'
								>
									{item.name}
								</Link>

								<p className='text-primary-500'>${item.price}</p>
							</div>
						</div>
					);
				})}
				<hr className='h-[1px] w-full border-gray-200/50' />
				<div className='bg-slate-500/60 py-4 px-8 rounded-sm flex flex-col gap-6'>
					<div className='flex justify-between border-b border-gray-200/50'>
						<p className='text-lg'>Cart subtotal:</p>
						<p className='text-primary-500'>${total}</p>
					</div>
					<div className='flex justify-between border-b border-gray-200/50'>
						<div>
							<p className='text-lg'>Shipping Free 2-3 weeks</p>
							<p>
								<input
									type='checkbox'
									checked={isRushOrder}
									onChange={() => setIsRushOrder((pre) => !pre)}
								/>{' '}
								Rush order 1-2 weeks +50$
							</p>
						</div>
						<p>${isRushOrder ? 50 : 0}</p>
					</div>
					<div className='flex justify-between'>
						<p className='text-lg'>Total:</p>
						<p className='text-primary-500'>${total + isRushOrder ? 50 : 0}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Checkout;


