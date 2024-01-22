function CurrentPricingCard({price}: {price: number}) {
	return (
		<div className='p-2 bg-black text-white rounded-2xl'>
			<div className='flex gap-2 justify-between'>
				<h6 className='text-xs'>Price</h6>
				<h6 className='text-xs'>${price}</h6>
			</div>
			<div className='flex gap-2 justify-between'>
				<h6 className='text-xs'>Delivery Date</h6>
				<h6 className='text-xs'>3-2-3432</h6>
			</div>
			<p className='text-[10px]'>
				Standard Delivery (15 Days) FREE Rush Order Delivery (8 Days) +50$
			</p>
			<button
				className='w-full bg-primary-400 rounded-full py-1 font-medium hover:bg-primary-600 mt-4'
				type='submit'
			>
				BUY
			</button>
		</div>
	);
}

export default CurrentPricingCard;
