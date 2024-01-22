import * as React from 'react';

interface FeatureInterface {
	name: string;
	description: string;
	logo: string;
}
const features:FeatureInterface[] = [
	{
		name: 'Custom Designed',
		description:
			'All of our neon light signs are custom designed by us, and can be altered to your specifications, size and colors. We can make any neon sign you want, in any fonts and a wide selection of colors.',
		logo: '',
	},
	{
		name: 'Adapter Included',
		description:
			'Your new LED neon comes with a 4.9 ft transparent cord which plugs into a certified adapter (if you need an adapter for another country, ask when checking out). The adapter has an additional 3-6 ft of cable that plugs into the socket.',
		logo: '',
	},
	{
		name: 'Worldwide Shipping',
		description:
			"Standard orders take 4-6 weeks*, including production and shipping. 'Rush' orders take 2-3 weeks*, including production and shipping to addresses in the USA and Canada. Please choose the 'Rush My Order' option at checkout.",
		logo: '',
	},
	{
		name: 'Easy To Install',
		description:
			"Our LED Neon signs are mounted on high quality, clear acrylic backboards, stands or boxes. Backboards feature pre-drilled holes for easy wall mounting, and are ready for mounting, right out of the box.",
		logo: '',
	},
	{
		name: '24 Months Warranty',
		description:
			"We offer the latest LED neon flex technology which is both stronger & lighter than glass neon. All of our signs come with a 24-month manufacturer warranty covering faulty items. Click here for more details.",
		logo: '',
	},
	{
		name: 'Remote Control Available',
		description:
			"Switch ON/OFF and pick from 10 brightness settings. The LED neon lights can be set to flash with adjustable speeds. (Optional/extra cost on some models)",
		logo: '',
	},
	{
		name: 'Low Energy, High Brightness',
		description:
			"Our LED neon signs are both economical and ecologically friendly. They have low energy consumption and a 100,000+ hours lifespan",
		logo: '',
	},
	{
		name: 'Strong And Powerful',
		description:
			"Our LED neons signs come in a range of bright, eye-catching colors. The energy-efficient technology ensures a powerful light that lasts for years.",
		logo: '',
	},
];

function Features() {
	return (
		<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
			{features.map((feature) => {
				const {name, description} = feature;
				return (
					<FeatureCard
						key={name}
						heading={name}
						description={description}
					/>
				);
			})}
		</div>
	);
}

export default Features;

interface FeatureCardProps {
	heading: string;
	description: string;
}

function FeatureCard(props: FeatureCardProps): React.ReactElement {
	const { heading, description } = props;
	return (
		<div className=' w-full py-4 pb-8 px-4 sm:px-6 bg-white shadow-lg rounded-lg text-center'>
			<div className='h-16 w-16 aspect-square rounded-full bg-black mx-auto'></div>
			<h3 className='text-2xl mt-8'>{heading}</h3>
			<p>{description}</p>
		</div>
	);
}
