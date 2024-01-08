import { pages } from './page_routes';

interface Navlink {
	label: string;
  path: string;
  queryParam?: string;
}

const navlinks: Navlink[] = [
	{
		label: 'Home',
		path: '/',
	},
	{
		label: 'get a quote',
    path: pages.getaquote,
    queryParam: 'get a quote',
	},
	{
		label: 'neon builder',
		path: pages.neon_builder,
	},
	{
		label: 'shop',
		path: pages.shop,
	},
	{
		label: 'outdoor sign',
    path: pages.outdoorSign,
    queryParam: 'outdoor sign',
	},
];

export default navlinks;
