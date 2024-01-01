import { useParams } from 'react-router-dom';

// icons
import { IconCircleChevronsLeft } from '@tabler/icons-react';

function Header() {
	
	const {id} = useParams()

	return (
		<article>
			<div className=' text-center'>
				<h1 className='text-black uppercase sections-title accent-underline'>
					{id}
				</h1>
			</div>
			<div className='flex justify-center'>
				<div className='w-full md:w-1/2 p-4 rounded-lg shadow-sm bg-slate-100'>
					<ul className='flex flex-col gap-3'>
						<li className='flex gap-2'>
							<IconCircleChevronsLeft size={20} />
							<p>
								Want a custom designed neon word sign? Go to our online{' '}
								<a className='text-primary-500 hover:underline cursor-pointer'>
									Neon Sign Maker
								</a>
							</p>
						</li>
						<li className='flex gap-2'>
							<IconCircleChevronsLeft size={20} />
							<p>
								Need a neon sign for your business logo, name, sale or event? Go
								to{' '}
								<a className='text-primary-500 hover:underline cursor-pointer'>
									Business Signs & Logos
								</a>
							</p>
						</li>
						<li className='flex gap-2'>
							<IconCircleChevronsLeft size={20} />
							<p>
								Searching for personalized wedding signs? Head over to{' '}
								<a className='text-primary-500 hover:underline cursor-pointer'>
									Neon Wedding Signs & Decor
								</a>
							</p>
						</li>
					</ul>
					<div className='mt-7'>
						<h3 className='text-lg'>Note:</h3>
						<p>
							If you're looking for anything else, tell us about it. We look
							forward to working with you to create something amazing! Call us
							now on{' '}
							<span className='bg-slate-200 px-2 rounded'>888 000 4851</span> or
							send us a message using the form below.
						</p>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Header;
