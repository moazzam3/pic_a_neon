import { useState } from 'react';
import { Tab } from '@headlessui/react';

// components
import IconButton from 'src/components/IconButton';

// assets
import goglepic from 'src/assets/demo.jpg';
import { IconGardenCart } from '@tabler/icons-react';

const Tabs = () => {
	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ');
	}
	const [categories] = useState([
		{
			buttonLabel: 'MATYMEJAP@MAILINATOR.COM',
			content: <CardSection />,
		},
		{
			buttonLabel: 'WALL ART & SCULPTURES',
			content: <p>Second Panel</p>,
		},
		{
			buttonLabel: 'BAR SIGNS',
			content: <p>third Panel</p>,
		},
		{
			buttonLabel: 'PARTIES & SPECIAL OCCASIONS',
			content: <p>forht Panel</p>,
		},
	]);

	return (
		<>
			<div className='text-center'>
				<h2 className='sections-title accent-underline'>Best Seller</h2>
			</div>
			<Tab.Group as='div' className='w-full'>
				<div className='w-full'>
					<Tab.List className='flex justify-center p-1 border-b pb-0 w-full'>
						{categories.map((category) => (
							<Tab
								key={category.buttonLabel}
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
								{category.buttonLabel}
							</Tab>
						))}
					</Tab.List>
				</div>
				<Tab.Panels className='mt-2'>
					{categories.map((category) => (
						<Tab.Panel
							key={category.buttonLabel}
							className={classNames(
								'rounded-xl p-3',
								'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
							)}
						>
							{category.content}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</>
	);
};

export default Tabs;

function CardSection() {
	return (
		<>
			<div className='flex gap-3 flex-wrap items-center justify-center'>
				{Array.from({ length: 25 }, (_, index) => index + 1).map((_, index) => {
					return (
						<div
							key={index}
							className='flex flex-col gap-4 rounded-lg shadow-xl'
						>
							<div className='bg-common-white w-fit p-4'>
								<div className='rounded-lg overflow-hidden'>
									<img src={goglepic} height={300} width={200} alt='' />
								</div>
							</div>
							<div className='flex flex-col px-4'>
								<h3 className='font-medium text-lg leading-none mb-0'>
									heading123
								</h3>
								<div className=' flex items-center justify-between'>
									<p className='text-primary-500'>$76.76 </p>
									<IconButton color='primary'>
										<IconGardenCart />
									</IconButton>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
