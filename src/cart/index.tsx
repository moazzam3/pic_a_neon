import { useMemo } from 'react';
import { Link } from 'react-router-dom';

// components
import Drawer from 'src/components/Drawer';
import useCart from './hooks';
import IconButton from 'src/components/IconButton';
import { pages } from 'src/constants/page_routes';
import config from 'src/config';
import Button from 'src/components/Button';
import { CartItem } from './cartContext';

// icons
import { IconPlus } from '@tabler/icons-react';
import { IconMinus } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';

function Cart() {
	const { closeCart, displayCart, cartItems, quantityhandler, removeFromCart } = useCart();

	const handleIncrease = (item: CartItem) => {
		const newItem = { ...item, quantity: item.quantity + 1 };
		quantityhandler(newItem);
	};
	const handleDecrease = (item: CartItem) => {
		const newItem = { ...item, quantity: item.quantity - 1 };
		quantityhandler(newItem);
	};
	const total = useMemo(() => {
		return cartItems.reduce((acc, item) => {
			return acc + Number(item.price) * item.quantity;
		}, 0);
	}, [cartItems]);

	return (
		<Drawer open={displayCart} onClose={closeCart}>
			<div className='h-screen'>
				<div className='w-screen md:w-auto md:min-w-[400px] p-8 flex flex-col justify-between items-center'>
					<div className='w-full flex justify-between items-center'>
						<h1 className='text-3xl font-semibold'>Cart</h1>
						<IconButton onClick={closeCart}>
							<IconX />
						</IconButton>
					</div>
					<hr className='h-[1px] w-full border-gray-200' />
				</div>
				{cartItems.length === 0 ? (
					<div className='flex flex-col items-center justify-center h-[65vh]'>
						<p className='text-xl'>Your cart is empty</p>
						<Link to={pages.shop}>
							<button className='px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg'>
								Continue Shopping
							</button>
						</Link>
					</div>
				) : (
					<div className='h-[65vh] px-4 border-b border-b-gray-200 overflow-auto w-full flex flex-col gap-4'>
						{cartItems.map((item) => {
							if (item?.customNeonBuilder) {
								return (
									<div
										key={item.id}
										className='flex items-center w-full gap-2'
									>
										<div className='w-[30%] border-gray-600/30 rounded-sm overflow-hidden self-stretch'>
											<img height={100} width={100} src={item.image} />
										</div>
										<div className='w-[70%] flex flex-col gap-2'>
											{item.name}
											<div>
											<IconButton className='hover:bg-gray-400/30' onClick={()=>removeFromCart(item.id as number)}><IconTrash/></IconButton>
										</div>
											<div className='w-full flex justify-between items-center'>
												<div className='flex items-center border rounded'>
													<button
														className='px-2 py-[4px] cursor-pointer hover:bg-gray-400/25'
														onClick={() => handleDecrease(item)}
													>
														<IconMinus />
													</button>
													<div className='px-4'>{item.quantity}</div>
													<button
														className='px-2 py-[4px] cursor-pointer hover:bg-gray-400/25'
														onClick={() => handleIncrease(item)}
													>
														<IconPlus />
													</button>
												</div>
												<p>{item.quantity} x ${item.price}</p>
											</div>
										</div>
									</div>
								);
							}
							return (
								<div
									key={item.id}
									className='flex items-center w-full gap-2'
								>
									<div className='w-[30%] border border-gray-600/30npm run dev rounded-sm overflow-hidden self-stretch'>
										<img
											height={100}
											width={100}
											src={config.imageBaseURL + item.image_path}
										/>
									</div>
									<div className='w-[70%] flex flex-col'>
										<Link
											to={pages.productDetails + `/${item.slug}`}
											className='hover:underline'
										>
											{item.name}
										</Link>
										<div>
											<IconButton className='hover:bg-gray-400/30' onClick={()=>removeFromCart(item.id as number)}><IconTrash/></IconButton>
										</div>
										<div className='w-full flex justify-between items-center'>
											<div className='flex items-center border rounded'>
												<button
													className='px-2 py-[4px] cursor-pointer hover:bg-gray-400/25'
													onClick={() => handleDecrease(item)}
												>
													<IconMinus />
												</button>
												<div className='px-4'>{item.quantity}</div>
												<button
													className='px-2 py-[4px] cursor-pointer hover:bg-gray-400/25'
													onClick={() => handleIncrease(item)}
												>
													<IconPlus />
												</button>
											</div>
											<p>{ item.quantity} x ${item.price}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				)}
				{cartItems.length !== 0 && (
					<div className='px-4 py-4 flex flex-col gap-4'>
						<div>
							<div className='flex justify-between'>
								<p>Subtotal</p>
								<p>${total}</p>
							</div>
						</div>
						<Button
							fullWidth
							variant='contained'
							Link
							LinkComponent={Link}
							to={pages.checkout}
						>
							Checkout
						</Button>
					</div>
				)}
			</div>
		</Drawer>
	);
}

export default Cart;
