import { pages } from './page_routes';

export interface NavLinkType {
	label: string;
  path: string;
  queryParam?: string;
}

const navlinks: NavLinkType[] = [
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
