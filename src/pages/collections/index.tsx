import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';

// project
import axios from 'src/utils/axios';
import { categoricProducts } from 'src/constants/services';
import config from 'src/config';

// assets
import { IconGardenCart } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { pages } from 'src/constants/page_routes';
import useCart from 'src/cart/hooks';
import ToggleSelector from 'src/components/ToggleSelector';
import Button from 'src/components/Button';
import { CartItem } from 'src/cart/cartContext';

function Collections() {
	const { id } = useParams<{ id: string }>();
	const { addToCart, openCart } = useCart();
	const [selectedSize, setSelectedSize] = useState('md');
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
	const handleAddToCart = (
		event: React.MouseEvent<HTMLButtonElement>,
		product: CartItem
	) => {
		event.preventDefault();
		addToCart(product);
		openCart();
	};
	const sizes = [ 'sm', 'md', 'lg', 'xl'];
	return (
		<div className='max-container mb-8'>
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
					{data?.products[0].products.map((product:CartItem) => {
						return (
							<Link
								to={pages.productDetails + `/${product.slug}`}
								key={product.id}
								className='flex flex-col gap-4 rounded-lg shadow-xl min-w-[300px] pb-4'
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
								<div className='flex flex-col px-4 gap-3'>
									<h3 className='font-medium text-lg leading-none mb-0'>
										{product.name}
									</h3>
									<p className='text-primary-500'>${product.price}</p>

									<div>
										<p>Size</p>
										<div>
											<ToggleSelector
												options={sizes}
												selected={selectedSize}
												setSelected={setSelectedSize}
											/>
										</div>
									</div>
									<Button
										fullWidth
										variant='contained'
										onClick={(event) =>
											handleAddToCart(event, { ...product, quantity: 1,size:selectedSize })
										}
									>
										<IconGardenCart />
										<span>add to cart</span>
									</Button>
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
