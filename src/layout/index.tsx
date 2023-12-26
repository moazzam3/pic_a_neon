import { ReactNode, useEffect, useState } from 'react';
// components
import Topbar from './topbar';
import Footer from './footer';
import JumpToTop from './jumpToTop';


const Layout = ({ children }: { children: ReactNode }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	
	return (
		<div className='relative'>
			<Topbar />
			<main className='min-h-screen'>{children}</main>
			<Footer />
			<div
				className={`fixed right-10 bottom-10 transition-opacity ${
					isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
			>
				<JumpToTop />
			</div>
		</div>
	);
};

export default Layout;
