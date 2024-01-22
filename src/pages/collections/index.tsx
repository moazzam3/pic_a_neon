import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';

// project
import axios from 'src/utils/axios';
import { categoricProducts } from 'src/constants/services';
import config from 'src/config';

// assets
import { IconGardenCart } from '@tabler/icons-react';
import { useEffect } from 'react';
import { pages } from 'src/constants/page_routes';
import useCart from 'src/cart/hooks';

function Collections() {
	const { id } = useParams<{ id: string }>();
	const { addToCart, openCart } = useCart();
	const { data, isPending } = useQuery({
		queryKey: ['collections', id],
		queryFn: async () => {
			const response = await axios.post(categoricProducts, {
				category_id: id,
			});
			return response.data;
		},
	});
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const handleAddToCart = ( event: React.MouseEvent<HTMLButtonElement>, product: any) => {
		event.preventDefault();
		addToCart(product);
		openCart();
	};
	return (
		<div className='max-container'>
			<h1 className='capitalize text-2xl md:text-3xl lg:text-4xl text-center mt-8 text-primary-500'>
				Collections
			</h1>
			{isPending ? (
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
					{[...Array(4)].map((_, index) => (
						<div key={index}>
							<div className='animate-pulse h-64 w-full rounded-lg shadow-lg bg-gray-300' />
						</div>
					))}
					{[...Array(4)].map((_, index) => (
						<div key={index}>
							<div className='animate-pulse h-64 w-full rounded-lg shadow-lg bg-gray-300' />
						</div>
					))}
					{[...Array(4)].map((_, index) => (
						<div key={index}>
							<div className='animate-pulse h-64 w-full rounded-lg shadow-lg bg-gray-300' />
						</div>
					))}
				</div>
			) : (
				<section className='flex gap-3 flex-wrap items-center justify-center'>
					{data?.products[0].products.map((product) => {
						return (
							<Link
								to={pages.productDetails + `/${product.slug}`}
								key={product.id}
								className='flex flex-col gap-4 rounded-lg shadow-xl min-w-[300px]'
							>
								<div className='bg-common-white p-4'>
									<div className='flex justify-center rounded-lg overflow-hidden'>
										<img
											src={config.imageBaseURL + product.image_path}
											height={300}
											width={200}
											alt={product.name}
										/>
									</div>
								</div>
								<div className='flex flex-col px-4'>
									<h3 className='font-medium text-lg leading-none mb-0'>
										{product.name}
									</h3>
									<div className=' flex items-center justify-between my-4'>
										<p className='text-primary-500'>${product.price}</p>
										<button
											className='flex gap-1 items-center p-1 border hover:bg-gray-400/25 rounded transition-colors duration-150 ease-in'
											onClick={(event) => handleAddToCart(event, {...product,quantity:1})}
										>
											<IconGardenCart />
											<span>add to cart</span>
										</button>
									</div>
								</div>
							</Link>
						);
					})}
				</section>
			)}
		</div>
	);
}

export default Collections;
