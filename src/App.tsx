import { Route, Routes } from 'react-router-dom';

// components
import Layout from 'src/layout';

// Pages
import Home from 'src/pages/home';
import GetAQuoteForm from './pages/get_a_quote';
import NeonBilder from './pages/neon_builder';

// constants
import { pages } from 'src/constants/page_routes';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path={pages.home} element={<Home />} />
				<Route path={pages.getaquote} element={<GetAQuoteForm />} />
				<Route path={pages.neon_builder} element={<NeonBilder />} />
			</Routes>
		</Layout>
	);
}

export default App;
