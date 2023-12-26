import { FC, ReactElement } from 'react';

interface ReadingsProps {}
const Informations: FC<ReadingsProps> = () => {
	return (
		<>
			<div className='max-w-7xl mx-auto grid grid-col-1 lg:grid-cols-2 gap-8 lg:gap-16'>
				<Article
					description='Popular in the 20th century, neon light signs are making a serious comeback thanks to a new, safer, more energy efficient and affordable material - LED neon flex. While vintage neon signs used glass neon tubes, modern neon is allowing a new generation to enjoy a high quality neon experience with a greater range of options while costing significantly less! Thanks to the affordability, energy efficiency, durability and safety of neon LED products, you can now buy neon LED signs and wall decor for a huge variety of uses. Add a stunning addition to your wedding party, create a neon word sign for bedroom or home decor, get a custom personalized name sign for the kids room, add a unique touch with neon bar signs, a neon sculpture, or get a customized neon sign for just about any purpose.'
					heading='MODERN NEON SIGNS'
				/>

				<Article
					description='Businesses are finding that modern neon flex products can be used for more than just neon open signs. Hipster neon word lights feature in co-workspaces; neon wall art adorns coffee shops, bars, restaurants, and diners; neon light up signs appear in beauty salons and barber shops; neon quote signs are found in nightclubs and yoga studios. Food trucks, pop ups, boutiques, hair salons, and entrepreneurial businesses that cater for the Instagram generation use neon light up signs to great effect. Want to get people talking about your business? Add a neon wall decoration as a backdrop for those all important selfies! Savvy start-ups and in the know marketing agencies deploy on-trend neon art and quirky signs to generate free advertising via social media shares'
					heading='CUSTOM NEON SIGNS FOR BUSINESS'
				/>

				<Article
					description='All of our signs, lights, lamps,and art are handcrafted from original designs. If you want a personalized neon sign, custom neon word sign, LED bar lights, neon sculpture, or something totally unique we can make it for you! We have designed a wide range of customized neon light signs for wedding party decor, events and birthdays. Need gift ideas? A customized neon sign is a standout present. Design your own personalized neon name signs for the home bar or garage. How about a wall art neon sign for the bedroom, living room or man cave? Take your pick of our freestanding neon lamps.'
					heading='PERSONALIZED & CUSTOMIZED NEON SIGNS'
				/>

				<Article
					description="Browse the store for our most popular neon art, aesthetic sculptures, table lamps, and word signs. Our neon name signs can be personalized for kids rooms and weddings. Or go your own way and create something truly unique with a customized neon sign for home or business. Just tell us your idea and we'll light it up! Our customized signs are made from high quality LED flex making them more cost-effective, durable, and safer than real glass neon signs while still providing an incredible visual impact. Click here to find out how our process works, custom options and delivery times."
					heading='GET LIT WITH CUSTOM NEON LIGHTS'
				/>
			</div>
		</>
	);
};

export default Informations;

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
