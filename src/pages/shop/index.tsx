import Card from './card';

function Shop() {
	return (
		<section className=''>
			<div className='max-w-5xl mx-auto text-center'>
				<h1 className='capitalize text-2xl md:text-3xl lg:text-4xl text-center mt-8 text-primary-500'>
					All Collections (A-Z)
				</h1>
				<p>
					This list of our collections might be a bit overwhelming to look
					through everything, so please get in touch if you want to talk it
					through with someone.We make all our signs from scratch, if you would
					like any customisation on any design on the site drop us an email and
					we'll send a fresh visual over to you.If you want something completely
					unique tell us more here.
				</p>
			</div>
			<div className='max-container px-8 lg:px-0 py-8 sm:py-12 md:py-16 xl:py-24 flex flex-col gap-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
					{[1, 2,3, 4, 5, 6, 7, 8].map((prod) => {
						return <Card key={prod} tagline='wall art and sculpture'/>;
					})}
				</div>
			</div>
		</section>
	);
}

export default Shop;
