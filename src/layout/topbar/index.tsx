import { Fragment, useState } from 'react';

// 3rd party libraries
import { Popover, Transition } from '@headlessui/react';
import { IconFrameOff, IconChevronDown } from '@tabler/icons-react';
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
		<header className='bg-black text-white px-4 md:px-6 lg:px-10 relative'>
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
								to={pages.getaquote}
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
							<a
								className='animated-underline after:bg-primary-500'
								href='#design'
							>
								outdoor sign
							</a>
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
				className={`mt-[80px] border-t border-slate-500 xl:hidden absolute top-0 left-0 z-10 min-h-screen w-full md:w-1/2 lg:w-1/3 bg-black ${
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
							to={pages.getaquote}
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
						<a className='animated-underline after:bg-primary-500' href='#home'>
							Shop
						</a>
					</li>
					<li>
						<a
							className='animated-underline after:bg-primary-500'
							href='#design'
						>
							outdoor sign
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Topbar;

const solutions = [
	{
		name: 'Analytics',
		description: 'Get a better understanding of your traffic',
		href: '#',
		icon: IconFrameOff,
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers',
		href: '#',
		icon: IconFrameOff,
	},
	{
		name: 'Security',
		description: "Your customers' data will be safe and secure",
		href: '#',
		icon: IconFrameOff,
	},
	{
		name: 'Integrations',
		description: 'Connect with third-party tools',
		href: '#',
		icon: IconFrameOff,
	},
	{
		name: 'Automations',
		description: 'Build strategic funnels that will convert',
		href: '#',
		icon: IconFrameOff,
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
				<span>Solutions</span>
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
					<div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5'>
						<div className='flex items-center py-4'>
							<div className='p-4 flex-1 border-r border-gray-400'>
								{solutions.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='group relative flex gap-x-6 rounded-lg p-4 font-semibold text-gray-900 hover:bg-gray-200'
									>
										{item.name}
									</a>
								))}
							</div>
							<div className='p-4 flex-1'>
								{solutions.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='group relative flex gap-x-6 rounded-lg p-4 font-semibold text-gray-900 hover:bg-gray-50'
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
						<div className='divide-x divide-gray-900/5 bg-gray-50'>
							<a
								href='#'
								className='flex items-center justify-center gap-x-2.5 p-3 font-semibold bg-slate-700 text-gray-50 hover:bg-gray-40'
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
