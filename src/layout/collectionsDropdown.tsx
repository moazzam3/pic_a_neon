import { Fragment } from 'react';
// 3rd party
import { Popover, Transition } from '@headlessui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// project
import axios from 'src/utils/axios';
import { categories } from 'src/constants/services';

// icons
import { IconChevronDown } from '@tabler/icons-react';
import { pages } from 'src/constants/page_routes';
import Skeleton from 'src/components/Skeleton';

interface CollectionsMenuProps {
	label: string;
}

function CollectionsMenu({ label }: CollectionsMenuProps) {
	const location = useLocation();
	const { data: productCategories, isPending } = useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			const response = await axios.post(categories);
			return response.data;
		},
	});

	function makeChunks<T>(array: T[]) {
		const objectOfChunkArray = { LeftPanel: [] as T[], RightPanel: [] as T[] };
		if (array.length > 0) {
			objectOfChunkArray.LeftPanel = array.slice(
				0,
				Math.floor(array.length / 2)
			);
			objectOfChunkArray.RightPanel = array.slice(
				Math.floor(array.length / 2),
				array.length
			);
		}
		return objectOfChunkArray;
	}

	const { LeftPanel, RightPanel } = makeChunks(
		productCategories?.categories || []
	);
	return (
		<Popover className='relative'>
			<Popover.Button
				className='animated-underline after:bg-primary-500 inline-flex items-center gap-x-1 uppercase leading-6 focus:ring-0 focus-visible:outline-none focus-visible:border-none focus-visible:ring-2 focus-visible:ring-primary-500'
				aria-haspopup='true'
				aria-expanded={open}
			>
				<span className={`animated-underline after:bg-primary-500 ${location.pathname.includes(pages.collections) && 'active'}`}>{label}</span>
				<IconChevronDown className='h-5 w-5' aria-hidden='true' />
			</Popover.Button>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-200'
				enterFrom='opacity-0 translate-y-1'
				enterTo='opacity-100 translate-y-0'
				leave='transition ease-in duration-150'
				leaveFrom='opacity-100 translate-y-0'
				leaveTo='opacity-0 translate-y-1'
			>
				<Popover.Panel className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4'>
					<div className='w-screen max-w-2xl flex-auto overflow-hidden rounded-3xl bg-black text-sm shadow-lg ring-1 ring-gray-900/5'>
						<div className='flex items-center py-4'>
							<div className='p-4 flex-1 border-r border-gray-400'>
								{isPending ? (
									<div className='flex flex-col gap-6'>
										{[...Array(5).keys()].map((item) => (
											<Skeleton key={item} className='h-9 w-full'></Skeleton>
										))}
									</div>
								) : (
									LeftPanel.map((item) => (
										<NavLink
											key={item.name}
											to={pages.collections + '/' + item.id}
											className={({ isActive }) =>
											`group relative flex gap-x-6 rounded-lg p-4 font-semibold hover:bg-primary-500 hover:text-primary-500 hover:bg-opacity-10 hover:ring-2 hover:ring-primary-500 hover:ring-opacity-50  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-50 ${
												isActive ? 'text-primary-500 bg-primary-500 ring-2 ring-primary-500 bg-opacity-25 ring-opacity-50':'text-gray-300'
											}`
										}
										>
											{item.name}
										</NavLink>
									))
								)}
							</div>
							<div className='p-4 flex-1'>
								{isPending ? (
									<div className='flex flex-col gap-6'>
										{[...Array(5).keys()].map((item) => (
											<Skeleton key={item} className='h-9 w-full'></Skeleton>
										))}
									</div>
								) : (
									RightPanel.map((item) => (
										<NavLink
											key={item.name}
											to={pages.collections + '/' + item.id}
											className={({ isActive }) =>
											`group relative flex gap-x-6 rounded-lg p-4 font-semibold hover:bg-primary-500 hover:text-primary-500 hover:bg-opacity-10 hover:ring-2 hover:ring-primary-500 hover:ring-opacity-50  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-50 ${
												isActive ? 'text-primary-500 bg-primary-500 ring-2 ring-primary-500 bg-opacity-25 ring-opacity-50':'text-gray-300'
											}`
										}
										>
											{item.name}
										</NavLink>
									))
								)}
							</div>
						</div>
						<div className='divide-x divide-gray-900/5 bg-gray-50'>
							<NavLink
								to={pages.shop}
								className='animated-underline hover:underline underline-offset-2 flex items-center justify-center gap-x-2.5 p-3 font-semibold bg-slate-700 text-gray-50 hover:bg-gray-40'
							>
								view all collections
							</NavLink>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}

export default CollectionsMenu;
