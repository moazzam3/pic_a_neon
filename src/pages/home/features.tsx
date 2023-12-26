import { FC, ReactNode, ReactElement } from 'react';

// icons
import { IconBolt } from '@tabler/icons-react';

interface FeatureProps {}
const Features: FC<FeatureProps> = () => {
	return (
		<div className='py-16 grid grid-cols-1 sm:grid-cols-2 justify-center place-items-center gap-16 lg:gap-36'>
			<Article
				description='Each LED neon sign or artwork is designed in-house by our professional designers.'
				heading='Custom Designed'
				iconImage={<IconBolt size={50} />}
			/>

			<Article
				description='Low energy consumption, 100,000+ hour lifespan, no heat or noise.'
				heading='Energy & Cost Efficient'
				iconImage={<IconBolt size={50} />}
			/>

			<Article
				description='Latest neon flex technology which is stronger & lighter than glass neon tubes.'
				heading='Durable'
				iconImage={<IconBolt size={50} />}
			/>

			<Article
				description='Our high quality backboards feature pre-drilled holes for easy wall mounting & hanging.'
				heading='Easy To Install'
				iconImage={<IconBolt size={50} />}
			/>
		</div>
	);
};

export default Features;

interface ArticleProps {
	iconImage: ReactNode;
	heading: string;
	description: string;
}

function Article(props: ArticleProps): ReactElement {
	const { iconImage, heading, description } = props;
	return (
		<article className='max-w-sm text-center items-center justify-items-center flex flex-col pb-12'>
			<div className='h-20 w-20 p-4 size-2/12 items-center justify-center flex  bg-black text-white aspect-square rounded-full '>
				{iconImage}
			</div>
			<h3 className='font-medium text-2xl mt-5'>{heading}</h3>
			<p className='max-w-lg'>{description}</p>
		</article>
	);
}
