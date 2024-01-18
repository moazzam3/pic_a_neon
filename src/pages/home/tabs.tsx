import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { useQuery, useQueries } from '@tanstack/react-query';

// components
import IconButton from 'src/components/IconButton';
import axios from 'src/utils/axios';
import config from 'src/config';

// assets
import { IconGardenCart } from '@tabler/icons-react';

// constants
import { categories, categoricProducts } from 'src/constants/services';
import useCart from 'src/cart/hooks';
import { pages } from 'src/constants/page_routes';
import { Link } from 'react-router-dom';

const Tabs = () => {
	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ');
	}

	const { data } = useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			const response = await axios.post(categories);
			return response.data;
		},
	});

	function sortAndSliceCategories(categories: any[]) {
		return categories.slice(0, 4).sort((a, b) => {
			// Sort by name (case-insensitive)
			const nameA = a.name.toLowerCase();
			const nameB = b.name.toLowerCase();
			return nameA.localeCompare(nameB);
		});
	}

	const productsByCategories = useQueries({
		queries: data
			? sortAndSliceCategories(data.categories).map((category) => ({
					queryKey: ['categoricProducts', category.id],
					queryFn: async () => {
						const response = await axios.post(categoricProducts, {
							category_id: category.id,
						});
						return response.data;
					},
			}))
			: [],
	});

	if (productsByCategories.length > 0 && productsByCategories[0].isPending) {
		return (
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
		);
	}
	return (
		<>
			<div className='text-center'>
				<h2 className='sections-title accent-underline'>Best Seller</h2>
			</div>
			<Tab.Group as='div' className='w-full'>
				<Fragment>
					<Tab.List className='flex justify-center p-1 border-b pb-0 w-full'>
						{productsByCategories.map((category) => {
							const { data } = category;
							if (!data) return null;
							return (
								<Tab
									key={data.products[0].id}
									className={({ selected }) =>
										classNames(
											'w-fit px-4 py-2.5 text-sm font-medium leading-5 border-b-2',
											'focus-visible:outline-none',
											selected
												? ' border-primary-500'
												: '  border-transparent hover:border-gray-300'
										)
									}
								>
									{data.products[0].name}
								</Tab>
							);
						})}
					</Tab.List>
					<Tab.Panels className='mt-2'>
						{productsByCategories.map((category) => {
							const { data } = category;
							if (!data) return null;
							const { products } = data;
							// if (products[0].products.length === 0) {
							// 	return (
							// 		<p key={products[0].id} className='text-center text-3xl'>
							// 			No products to show!
							// 		</p>
							// 	);
							// }
							return (
								<Tab.Panel
									key={products[0].id}
									className={classNames(
										'rounded-xl p-3',
										// 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
									)}
								>
									<CardSection products={products[0].products} />
								</Tab.Panel>
							);
						})}
					</Tab.Panels>
				</Fragment>
			</Tab.Group>
		</>
	);
};

export default Tabs;

function CardSection({ products }) {
	const { addToCart, openCart } = useCart();
	const handleAddToCart = ( event: React.MouseEvent<HTMLButtonElement>, product: any) => {
		event.preventDefault();
		addToCart(product);
		openCart();
	};
	return (
		<>
			<div className='flex gap-3 flex-wrap items-center justify-center'>
				{products.map((product) => {
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
									<h3 className='font-medium text-lg leading-none mb-0 max-w-xs'>
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
			</div>
		</>
	);
}
