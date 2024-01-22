import { useMemo, useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import ReactPaginate from 'react-paginate';

// project imports
import { products } from 'src/constants/services';
import axios from 'src/utils/axios';
import config from 'src/config';
import { Link } from 'react-router-dom';
import { pages } from 'src/constants/page_routes';

const itemsPerPage = 4;

function ImageGallery() {
	const [currentPage, setCurrentPage] = useState(0);
	const offset = currentPage * itemsPerPage;

	const { data, isPending } = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const response = await axios.post(products);
			return response.data;
		},
	});
	const lengthOfData = useRef(0);
	// Function to split the array into chunks of four elements
	function chunkArray(array: any[], chunkSize: number) {
		const chunks = [];
		for (let i = 0; i < array.length; i += chunkSize) {
			chunks.push(array.slice(i, i + chunkSize));
		}
		return chunks;
	}

	// Split the array into chunks of four elements each
	const arrayOfFourElements = useMemo(() => {
		if (data?.products) {
			const chunkedArray = chunkArray(data?.products, 4);
			lengthOfData.current = chunkedArray.length;
			const currentItems = chunkedArray.slice(offset, offset + itemsPerPage);
			return currentItems;
		}
		return [];
	}, [data?.products, offset]);

	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
	};

	if (isPending) {
		return <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
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
	}

	return (
		<>
			<h2 className='text-black text-center sections-title accent-underline'>
				Popular neon signs
			</h2>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
				{arrayOfFourElements.map((chunk: any, index: number) => (
					<div key={index} className='grid gap-4'>
						{chunk.map((product: any) => (
							<Link to={pages.productDetails + `/${product.slug}`} key={product.id} className='border overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-200'>
								<img
									className='h-auto max-w-full'
									src={config.imageBaseURL + product.image_path}
									alt={product.name}
								/>
							</Link>
						))}
					</div>
				))}
			</div>
			<div className='flex justify-end mt-4'>
				<ReactPaginate
					previousLabel={'←'}
					nextLabel={'→'}
					breakLabel={'...'}
					pageCount={Math.ceil(lengthOfData.current / itemsPerPage)}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={handlePageClick}
					containerClassName={'flex gap-2'}
					activeClassName={'active-pagination'}
					pageLinkClassName='pagination-link'
				/>
			</div>
		</>
	);
}

export default ImageGallery;