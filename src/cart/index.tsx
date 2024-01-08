// components
import Drawer from 'src/components/Drawer';
import useCart from './hooks';
import IconButton from 'src/components/IconButton';

function Cart() {
	const { closeCart, displayCart } = useCart();

	return (
		<Drawer open={displayCart} onClose={closeCart}>
			<div className='w-screen md:w-auto md:min-w-[400px] p-8 flex flex-col justify-between items-center'>
				<div className='w-full flex justify-between items-center'>
					<h1 className='text-3xl font-semibold'>Cart</h1>
					<IconButton onClick={closeCart}>Close</IconButton>
				</div>
				<hr className='h-[1px] w-full border-gray-200'/>
			</div>
		</Drawer>
	);
}

export default Cart;
