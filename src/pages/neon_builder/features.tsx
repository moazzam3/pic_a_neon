import * as React from 'react';

function Features() {
  function getArrayByLength(length: number) {
		return Array.from({ length }, (_, i) => i);
	}
	return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {getArrayByLength(8).map(feature => {
        return <FeatureCard key={feature}
				heading='Custom Designed'
				description='All of our neon light signs are custom designed by us, and can be altered to your specifications, size and colors. We can make any neon sign you want, in any fonts and a wide selection of colors.'
			/>
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
