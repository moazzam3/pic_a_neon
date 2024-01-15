import { useQuery } from '@tanstack/react-query';

// project
import axios from 'src/utils/axios';
import Card from './card';
import { categories, get_collection_description } from 'src/constants/services';

function Shop() {
	const { data: productCategories, isPending } = useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			const response = await axios.post(categories);
			return response.data;
		},
	});
	const { data, isPending: isDescriptionPending } = useQuery({
		queryKey: ['description'],
		queryFn: async () => {
			const response = await axios.get(get_collection_description);
			return response.data;
		},
	});

	return (
		<section className=''>
			<div className='max-w-5xl mx-auto text-center'>
				<h1 className='capitalize text-2xl md:text-3xl lg:text-4xl text-center mt-8 text-primary-500'>
					All Collections (A-Z)
				</h1>
				{isDescriptionPending ? (
					<div className='flex flex-col gap-1'>
						{[...Array(3)].map((_, index) => (
							<div
								key={index}
								className='animate-pulse h-3 w-full rounded-lg shadow-lg bg-gray-300'
							/>
						))}
					</div>
				) : (
					<p>{data?.links.description}</p>
				)}
			</div>
			<div className='max-container px-8 lg:px-0 py-8 sm:py-12 md:py-16 xl:py-24 flex flex-col gap-8'>
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
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
						{productCategories?.categories.map((product) => {
							return (
								<Card
									key={product.id}
									tagline='wall art and sculpture'
									product={product}
								/>
							);
						})}
					</div>
				)}
			</div>
		</section>
	);
}

export default Shop;
