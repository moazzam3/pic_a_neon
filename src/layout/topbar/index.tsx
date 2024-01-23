import { useState } from 'react';

// 3rd party libraries
import { NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// project imports
import logo from 'src/assets/Logo.png';
import IconButton from 'src/components/IconButton';
import useCart from 'src/cart/hooks';
import {NavLinkType} from 'src/constants/navlinks';
import { getMenu } from 'src/constants/services';
import axios from 'src/utils/axios';
import Skeleton from 'src/components/Skeleton';
import CollectionsMenu from '../collectionsDropdown';
import TopMessage from '../topMessage';

// icons
import { IconShoppingBag, IconMenu2, IconX } from '@tabler/icons-react';
// constants
import { pages } from 'src/constants/page_routes';

function Topbar() {
	const [open, setOpen] = useState<boolean>(false);
	const toggleOpen = () => setOpen(!open);

	// cart
	const { openCart,cartItems } = useCart();

	const { data, isPending } = useQuery({
		queryKey: ['menu'],
		queryFn: async () => {
			const response = await axios.get(getMenu);
			return response.data;
		},
	});
	
	const navlinks: NavLinkType[] = [
		{
			label: data?.menus.title1 || 'home',
			path: pages.home,
		},
		{
			label:  data?.menus.title2 || 'get a quote',
			path: pages.getaquote,
			queryParam: 'get a quote',
		},
		{
			label:  data?.menus.title3 || 'neon builder',
			path: pages.neon_builder,
		},
		{
			label:  data?.menus.title4 || 'shop',
			path: pages.shop,
		},
		{
			label:  data?.menus.title6 || 'outdoor sign',
			path: pages.outdoorSign,
			queryParam: 'outdoor sign',
		},
	];
	return (
		<header className='bg-black text-white sticky top-0 z-50'>
			<TopMessage/>
			<div className='relative w-full h-full px-4 md:px-6 lg:px-10'>
				{/* wide screen nav */}
				<nav className='min-h-[80px] items-center justify-between hidden xl:flex'>
					<div />
					<div className='flex items-center justify-center space-x-12'>
						<ul className='flex items-center justify-center space-x-6 uppercase'>
							<li>
								{isPending ? (
									<Skeleton className='w-16 h-6' />
								) : (
									<NavLink
										className={({ isActive }) =>
											`animated-underline after:bg-primary-500 ${
												isActive && 'active'
											}`
										}
										to={pages.home}
									>
										{data?.menus.title1}
									</NavLink>
								)}
							</li>
							<li>
								{isPending ? (
									<Skeleton className='w-28 h-6' />
								) : (
									<NavLink
										className={({ isActive }) =>
											`animated-underline after:bg-primary-500 ${
												isActive && 'active'
											}`
										}
										to={pages.getaquote + '/Get A Quote'}
									>
										{data?.menus.title2}
									</NavLink>
								)}
							</li>
							<li>
								{isPending ? (
									<Skeleton className='w-36 h-6' />
								) : (
									<NavLink
										className={({ isActive }) =>
											`animated-underline after:bg-primary-500 ${
												isActive && 'active'
											}`
										}
										to={pages.neon_builder}
									>
										{data?.menus.title3}
									</NavLink>
								)}
							</li>
						</ul>
						{/* <NavLink
						className={({ isActive }) =>
							`animated-underline after:bg-primary-500 ${isActive && 'active'}`
						}
						to={pages.home}
					> */}
						<img src={logo} alt='logo' className='w-40' />
						{/* </NavLink> */}
						<ul className='flex items-center justify-center space-x-6 uppercase'>
							<li>
								{isPending ? (
									<Skeleton className='h-6 w-16' />
								) : (
									<NavLink
										className={({ isActive }) =>
											`animated-underline after:bg-primary-500 ${
												isActive && 'active'
											}`
										}
										to={pages.shop}
									>
										{data?.menus.title4}
									</NavLink>
								)}
							</li>
							<li>
								{isPending ? (
									<Skeleton className='h-6 w-24' />
								) : (
									<CollectionsMenu label={data?.menus.title5} />
								)}
							</li>
							<li>
								{isPending ? (
									<Skeleton className='h-6 w-28' />
								) : (
									<NavLink
										className='animated-underline after:bg-primary-500'
										to={pages.getaquote + '/Outdoor Sign'}
									>
										{data?.menus.title6}
									</NavLink>
								)}
							</li>
						</ul>
					</div>
					<div className='flex items-center gap-2'>
						<IconButton onClick={openCart}>
							<IconShoppingBag className='h-6 w-6' />
						</IconButton>
					</div>
				</nav>

				{/* mobile / tablets nac  */}
				<nav className='min-h-[80px] items-center justify-between flex xl:hidden'>
					<IconButton
						aria-label={open ? 'Close Menu' : 'Open Menu'}
						onClick={toggleOpen}
					>
						{open ? (
							<IconX className='h-6 w-6' />
						) : (
							<IconMenu2 className='h-6 w-6' />
						)}
					</IconButton>
					<div>
						{/* <a href='#logo' className='flex items-center justify-center'> */}
						<img src={logo} alt='logo' className='w-40' />
						{/* </a> */}
					</div>
					<div className='flex items-center gap-2'>
						<IconButton aria-label='Shopping Bag' enableBadge>
							<IconShoppingBag className='h-6 w-6' />
						</IconButton>
					</div>
				</nav>

				{/* drawer */}
				<div
					className={`mt-[80px] border-t border-slate-500 xl:hidden absolute top-0 left-0 right-0 z-10 min-h-screen w-full md:w-1/2 lg:w-1/3 bg-black ${
						open && 'shadow-xl'
					} shadow-slate-100 text-primary-500 transition-transform ease-linear ${
						open ? 'translate-x-0' : '-translate-x-full'
					}`}
				>
					<ul className='mt-4 flex flex-col justify-center space-y-6 uppercase px-10 text-lg'>
						{navlinks.map((navlink) => {
							const { label, path, queryParam } = navlink;
							const to = queryParam ? `${path}/${queryParam}` : path;
							return (
								<li key={label}>
									{isPending ? (
										<Skeleton className='h-6 w-28' />):(<NavLink
											className={({ isActive }) =>
												`animated-underline after:bg-primary-500 ${
													isActive && 'active'
												}`
											}
											to={to}
										>
											{label}
										</NavLink>)}
									
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Topbar;

