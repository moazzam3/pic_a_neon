import Form from './form';
import Header from './header';

function GetAQuote() {
	return (
		<section className='max-container px-8 lg:px-0 py-12'>
			<Header/>
			<div className='flex justify-center'>
				<div className='w-full md:w-1/2 px-4 py-12 lg:px-0'>
					<Form />
				</div>
			</div>
		</section>
	);
}

export default GetAQuote;
