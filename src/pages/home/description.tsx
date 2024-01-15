interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
	const title =
		'Pick A Neon is the most affordable supplier of LED neon light signs.';
	const description = `Let us light up your life with quality LED neon signs for home, business, weddings, events, & more. Take a business logo, song lyrics, a kid's name, or even the shape of your dog, & neon-ify it! We are helping make art accessible with easy-to-design, stylish neon lights. Now there's no excuse not to turn up the brightness!`;
	return (
		<div className='w-full flex flex-col items-center gap-5 text-center'>
			<div className='max-w-6xl'>
				<h2 className='text-3xl font-poppins font-medium leading-none text-primary-500'>
					{title}
				</h2>
				<p className='text-gray-600'>{description}</p>
			</div>
		</div>
	);
};

export default Description;



