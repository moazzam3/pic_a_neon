import { ReactElement } from "react";

interface ArticleProps {
	heading: string;
	description: string;
}

function Article(props: ArticleProps): ReactElement {
	const { heading, description } = props;
	return (
		<article className='items-left justify-items-left flex flex-col'>
			<h3 className='font-medium text-xl md:text-2xl xl:text-3xl mt-5 text-primary-500'>{heading}</h3>
			<p className='max-w-2xl font-extralight'>{description}</p>
		</article>
	);
}
export default Article;