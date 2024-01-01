import { Fragment, useState } from 'react';

// 3rd party libraries
import { Popover, Transition } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

// project imports
import logo from 'src/assets/Logo.png';
import IconButton from 'src/components/IconButton';

// icons
import { IconShoppingBag, IconMenu2, IconX } from '@tabler/icons-react';
// constants
import { pages } from 'src/constants/page_routes';

function Topbar() {
	const [open, setOpen] = useState<boolean>(false);
	const toggleOpen = () => setOpen(!open);
	return (
		<header className='bg-black text-white sticky top-0 z-50'>
			<div className='relative w-full h-full px-4 md:px-6 lg:px-10'>
				{/* wide screen nav */}
				<nav className='min-h-[80px] items-center justify-between hidden xl:flex'>
					<div />
					<div className='flex items-center justify-center space-x-12'>
						<ul className='flex items-center justify-center space-x-6 uppercase'>
							<li>
								<NavLink
									className={({ isActive }) =>
										`animated-underline after:bg-primary-500 ${
											isActive && 'active'
										}`
									}
									to={pages.home}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										`animated-underline after:bg-primary-500 ${
											isActive && 'active'
										}`
									}
									to={pages.getaquote + '/Get A Quote'}
								>
									get a quote
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										`animated-underline after:bg-primary-500 ${
											isActive && 'active'
										}`
									}
									to={pages.neon_builder}
								>
									Design your own neon
								</NavLink>
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
								<a
									className='animated-underline after:bg-primary-500'
									href='#home'
								>
									Shop
								</a>
							</li>
							<li>
								<SolutionsMenu />
							</li>
							<li>
								<NavLink
									className='animated-underline after:bg-primary-500'
									to={pages.getaquote + '/Outdoor Sign'}
								>
									outdoor sign
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='flex items-center gap-2'>
						<IconButton>
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
						<IconButton aria-label='Shopping Bag'>
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
					{/* divider */}
					<ul className='mt-4 flex flex-col justify-center space-y-6 uppercase px-10 text-lg'>
						<li>
							<NavLink
								className={({ isActive }) =>
									`animated-underline after:bg-primary-500 ${
										isActive && 'active'
									}`
								}
								to={pages.home}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									`animated-underline after:bg-primary-500 ${
										isActive && 'active'
									}`
								}
								to={pages.getaquote + '/Get A Quote'}
							>
								get a quote
							</NavLink>
						</li>
						<li>
							<a
								className='animated-underline after:bg-primary-500'
								href='#design'
							>
								Design your own neon
							</a>
						</li>
						<li>
							<a
								className='animated-underline after:bg-primary-500'
								href='#home'
							>
								Shop
							</a>
						</li>
						<li>
							<NavLink
								className='animated-underline after:bg-primary-500'
								to={pages.getaquote + '/Outdoor Sign'}
							>
								outdoor sign
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Topbar;
interface Link {
	name: string;
	href: string;
}
const LeftPanel: Link[] = [
	{
		name: 'matymejap@mailinator.com',
		href: '#',
	},
	{
		name: 'Wall Art & sculptures',
		href: '#',
	},
	{
		name: 'Bar Signs',
		href: '#',
	},
	{
		name: 'Parties & Special Occasions',
		href: '#',
	},
	{
		name: 'Hone Decor',
		href: '#',
	},
	{
		name: "There's No Place Like Home Sign",
		href: '#',
	},
	{
		name: 'Desk Lights and Lamps',
		href: '#',
	},
	{
		name: 'LED Neon Sings',
		href: '#',
	},
	{
		name: 'Open Sings',
		href: '#',
	},
];

const RightPanel: Link[] = [
	{
		name: 'Personalized Neon Signs',
		href: '#',
	},
	{
		name: 'Wedding Signs',
		href: '#',
	},
	{
		name: 'Cheap Neon Signs for Sale',
		href: '#',
	},
	{
		name: 'Hello Gorgeous Neon Light',
		href: '#',
	},
	{
		name: 'Mini neon Sings under $199',
		href: '#',
	},
	{
		name: 'Signs of Change',
		href: '#',
	},
	{
		name: 'Home Gyms & Fitness Studios',
		href: '#',
	},
	{
		name: 'LED Neon Quote Signs',
		href: '#',
	},
	{
		name: 'matymejap@mailinator.com',
		href: '#',
	},
];
function SolutionsMenu() {
	return (
		<Popover className='relative'>
			<Popover.Button
				className='animated-underline after:bg-primary-500 inline-flex items-center gap-x-1 uppercase leading-6 focus:ring-0 focus-visible:outline-none focus-visible:border-none focus-visible:ring-2 focus-visible:ring-primary-500'
				aria-haspopup='true'
				aria-expanded={open}
			>
				<span>Collections</span>
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
					<div className='w-screen max-w-2xl flex-auto overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5'>
						<div className='flex items-center py-4'>
							<div className='p-4 flex-1 border-r border-gray-400'>
								{LeftPanel.map((item) => (
									<NavLink
										key={item.name}
										to={item.href}
										className='group relative flex gap-x-6 rounded-lg p-4 font-semibold text-gray-900 hover:bg-primary-500 hover:text-primary-500 hover:bg-opacity-10 hover:ring-2 hover:ring-primary-500 hover:ring-opacity-50 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-50'
									>
										{item.name}
									</NavLink>
								))}
							</div>
							<div className='p-4 flex-1'>
								{RightPanel.map((item) => (
									<NavLink
										key={item.name}
										to={item.href}
										className='group relative flex gap-x-6 rounded-lg p-4 font-semibold text-gray-900 hover:bg-primary-500 hover:text-primary-500 hover:bg-opacity-10 hover:ring-2 hover:ring-primary-500 hover:ring-opacity-50 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-50'
									>
										{item.name}
									</NavLink>
								))}
							</div>
						</div>
						<div className='divide-x divide-gray-900/5 bg-gray-50'>
							<a
								href='#'
								className='animated-underline after:bg-white flex items-center justify-center gap-x-2.5 p-3 font-semibold bg-slate-700 text-gray-50 hover:bg-gray-40'
							>
								view all collections
							</a>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
