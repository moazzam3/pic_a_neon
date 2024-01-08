import { Route, Routes } from 'react-router-dom';

// components
import Layout from 'src/layout';
import { CartProvider } from './cart/cartContext';

// Pages
import Home from 'src/pages/home';
import GetAQuoteForm from './pages/get_a_quote';
import NeonBilder from './pages/neon_builder';
import Shop from './pages/shop';
import Collections from './pages/collections';
import Cart from './cart';

// constants
import { pages } from 'src/constants/page_routes';

function App() {
	return (
		<CartProvider>
			<Layout>
				<Routes>
					<Route path={pages.home} element={<Home />} />
					<Route path={pages.getaquote + '/:id'} element={<GetAQuoteForm />} />
					<Route
						path={pages.outdoorSign + '/:id'}
						element={<GetAQuoteForm />}
					/>
					<Route path={pages.neon_builder} element={<NeonBilder />} />
					<Route path={pages.collections + '/:id'} element={<Collections />} />
					<Route path={pages.shop} element={<Shop />} />
				</Routes>
			</Layout>
			<Cart />
		</CartProvider>
	);
}

export default App;
