// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Layout from 'src/layout';

// Pages
import Home from 'src/pages/home';
import GetAQuoteForm from './pages/get_a_quote';
import NeonBilder from './pages/neon_builder';

// constants
import { pages } from 'src/constants/page_routes';
import Collections from './pages/collections';
// import Drawer from './components/Drawer';

function App() {
	// const [drawer, setDrawer] = useState(false);
	// const handleOpenDrawer = () => setDrawer(true);
	// const handleCloseDrawer = () => setDrawer(false);
	return (
		<Layout>
			{/* <button onClick={handleOpenDrawer}>Open Drawer</button>
			<Drawer open={drawer} onClose={handleCloseDrawer}>
				<div className='w-[500px]'>Kala sha Kala</div>
			</Drawer> */}
			<Routes>
				<Route path={pages.home} element={<Home />} />
				<Route path={pages.getaquote + '/:id'} element={<GetAQuoteForm />} />
				<Route path={pages.neon_builder} element={<NeonBilder />} />
				<Route path={pages.collections + '/:id'} element={<Collections />} />
			</Routes>
		</Layout>
	);
}

export default App;
