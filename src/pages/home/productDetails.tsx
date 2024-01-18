import { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// components
import ColorSelector, { Color } from '../neon_builder/colorSelector';
import Button from 'src/components/Button';

// project imports
import axios from 'src/utils/axios';
import { productDetails } from 'src/constants/services';
import config from 'src/config';
import IconButton from 'src/components/IconButton';
import { pages } from 'src/constants/page_routes';

// icons
import { IconArrowLeft } from '@tabler/icons-react';
import { IconInfoTriangle } from '@tabler/icons-react';
import useCart from 'src/cart/hooks';

const colors: Color[] = [
	{
		id: '1',
		name: 'red',
		hex: '#ff0000',
	},
	{
		id: '2',
		name: 'green',
		hex: '#00ff00',
	},
	{
		id: '6',
		name: 'pink',
		hex: '#ff00ff',
	},
	{
		id: '7',
		name: 'white',
		hex: '#C0C0C0',
	},
	{
		id: '4',
		name: 'yellow',
		hex: '#fbf25d',
	},
	{
		id: '9',
		hex: '#ffbc4b',
		name: 'orange',
	},
	{
		id: '10',
		hex: '#1c1ef4',
		name: 'blue',
	},
	{
		id: '11',
		hex: '#ff94ff',
		name: 'cotton',
	},
	{
		id: '12',
		hex: '#8be8ea',
		name: 'mint',
	},
	{
		id: '13',
		hex: '#8ee0ff',
		name: 'Ice blue',
	},
	{
		id: '14',
		hex: '#c35fe9',
		name: 'Purple',
	},
	{
		id: '15',
		hex: '#fe69bf',
		name: 'deep',
	},
];

function ProductDetails() {
	const navigate = useNavigate();
	const [color, setColor] = useState<Color>({
		id: '1',
		name: 'red',
		hex: '#ff0000',
	});
	const { id } = useParams();

	const { openCart } = useCart()

	const { data, isPending } = useQuery({
		queryKey: ['productDetails', id],
		queryFn: async () => {
			const response = await axios.post(productDetails, { slug: id });
			return response.data;
		},
	});
	useEffect(() => {
		window.scrollTo(0, 96);
	}, [])
	
	if (isPending) {
		return (
			<div className='max-container'>
				<IconButton onClick={() => navigate(-1)}>
					<IconArrowLeft />
				</IconButton>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-0 py-8 sm:py-12 md:py-16 xl:py-24'>
					<div>
						<div className='animate-pulse h-96 w-full rounded-lg shadow-lg bg-gray-300' />
					</div>
					<div className='flex flex-col gap-6 justify-center'>
						<div className='animate-pulse h-12 w-full rounded-lg shadow-lg bg-gray-300'></div>
						<div className='flex flex-col gap-2'>
							<div className='animate-pulse h-6 w-full rounded-lg shadow-lg bg-gray-300'></div>
							<div className='animate-pulse h-6 w-full rounded-lg shadow-lg bg-gray-300'></div>
							<div className='animate-pulse h-6 w-full max-w-xs rounded-lg shadow-lg bg-gray-300'></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className='max-container'>
			<IconButton onClick={() => navigate(-1)}>
				<IconArrowLeft />
			</IconButton>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-0 py-8 sm:py-6 md:py-8 xl:py-12'>
				<div>
					<img
						className='h-auto rounded-lg'
						src={config.imageBaseURL + data?.products.image_path}
						alt=''
					/>
				</div>
				<div className='flex flex-col justify-center'>
					<h1 className='text-2xl md:text-3xl xl:text-4xl'>
						{data?.products.name}
					</h1>
					<p className='text-lg xl:text-2xl'>
						{data?.products.price}
						<span className='text-primary-500'>$</span>
					</p>
					<div className='mt-8'>
						<p className='text-sm md:text-base xl:text-lg text-slate-500'>
							{data?.products.description}
						</p>
						<p className='mt-4'>
							<span className='font-semibold'>Size: </span>
							{data?.products.size} approx.
						</p>
						<div className='mt-6 flex py-3 px-4 rounded-md bg-blue-300/80 text-blue-600 gap-4'>
							<IconInfoTriangle className='h-9 w-9'/>
							<p>If you’re looking for something
							a bit different why not use our <Link to={pages.neon_builder} className='underline underline-offset-2'>online neon sign maker</Link> to design
							your own customized bar light.</p>
						</div>
					</div>
					<div className='mt-8 flex flex-col gap-4'>
						<ColorSelector value={color} onChange={setColor} options={colors} />
						<Button
							variant='outlined'
							className='hover:bg-primary-500 hover:text-white transition-colors'
							onClick={openCart}
						>
							Add to cart
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
