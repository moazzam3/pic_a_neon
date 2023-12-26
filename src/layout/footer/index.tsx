import { ReactElement } from 'react';

// assets
import logo from 'src/assets/Logo.png';
import { IconPhone, IconMail } from '@tabler/icons-react';

function Footer(): ReactElement {
	const pagesLinks = [
		{
			label: 'About Us',
			link: '/about',
		},
		{
			label: 'Visit Our Store',
			link: '/visit',
		},
		{
			label: 'Contact Us',
			link: '/contact',
		},
	];

	const servicesLinks = [
		{
			label: 'FAQs',
			link: '/faqs',
		},
		{
			label: 'Privacy Policy',
			link: '/privacy',
		},
		{
			label: 'Terms & Conditions',
			link: '/terms',
		},
		{
			label: 'Returns Policy',
			link: '/return',
		},
	];
	return (
		<footer className='bg-black pt-16'>
			<div className='max-container flex flex-col space-y-16'>
				<div className='flex justify-center items-center'>
					<div>
						<img src={logo} alt='logo' height={200} width={200} />
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='grid grid-col-1 md:grid-col-2 xl:grid-cols-4 gap-4 md:gap-7 lg:gap-10'>
						<ul className='w-full flex flex-col space-y-2 text-primary-500'>
							{pagesLinks.map((item) => (
								<li
									key={item.label}
									className='w-fit animated-underline after:bg-primary-500'
								>
									<a href={item.link} rel='noreferrer'>
										{item.label}
									</a>
								</li>
							))}
						</ul>
						<ul className='w-full flex flex-col space-y-2 text-warning-500'>
							{servicesLinks.map((item) => (
								<li
									key={item.label}
									className='w-fit animated-underline after:bg-warning-500'
								>
									<a href={item.link} rel='noreferrer'>
										{item.label}
									</a>
								</li>
							))}
						</ul>
						<ul className='w-full flex flex-col space-y-2 text-info-500'>
							<li className='w-fit text-slate-200'>Pic A Neon</li>
							<li className='w-fit animated-underline after:bg-info-500'>
								<a href='' target='_blank'>
									Order Now
								</a>
							</li>
						</ul>
						<ul className='w-full flex flex-col space-y-2 text-error-500'>
							<li className='w-fit text-slate-200'>Contact info</li>
							<li className='flex items-center gap-1'>
								<IconPhone />
								<span className='animated-underline after:bg-error-500'>
									<a href='tel:1-800-123-4567'>1-800-123-4567</a>
								</span>
							</li>
							<li className='flex items-center gap-1'>
								<IconMail />
								<span className='animated-underline after:bg-error-500'>
									<a href='mailto:picaneon@gmail.com'>picaneon@gmail.com</a>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='mt-16 pb-4 flex justify-center items-center'>
				<p className='text-slate-200'>
					Copyright © 2018-2022 Pick A Neon®, All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
