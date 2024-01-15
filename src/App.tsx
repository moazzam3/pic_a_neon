import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner'

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
import ProductDetails from './pages/home/productDetails';

// constants
import { pages } from 'src/constants/page_routes';
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster/>
			<CartProvider>
				<Layout>
					<Routes>
						<Route path={pages.home} element={<Home />} />
						<Route
							path={pages.getaquote + '/:id'}
							element={<GetAQuoteForm />}
						/>
						<Route
							path={pages.outdoorSign + '/:id'}
							element={<GetAQuoteForm />}
						/>
						<Route path={pages.neon_builder} element={<NeonBilder />} />
						<Route
							path={pages.collections + '/:id'}
							element={<Collections />}
						/>
						<Route path={pages.shop} element={<Shop />} />
						<Route path={pages.productDetails + '/:id'} element={<ProductDetails />} />
					</Routes>
				</Layout>
				<Cart />
			</CartProvider>
		</QueryClientProvider>
	);
}

export default App;
