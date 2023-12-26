// icons
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
function SocialLinks() {
	return (
		<div className='flex flex-col justify-center'>
			<div className='text-center'>
				<h3 className='text-black text-center sections-title accent-underline'>
					Follow US!
				</h3>
				<p className='text-black text-center'>
					Follow us on social media to get the latest updates and promotions.
				</p>
			</div>
			<div className='flex justify-between w-full max-w-lg mx-auto mt-4'>
				<div className='flex'>
					<a
						href='https://www.facebook.com/My-Home-Improvement-104306778500105'
						target='_blank'
						rel='noreferrer'
						className='inline-flex flex-col items-center text-[#3b5998] hover:text-[#365899] transition-colors duration-300'
					>
						<IconBrandFacebook size={48} />
						<p>Facebook</p>
					</a>
				</div>
				<div className='flex'>
					<a
						href='https://www.facebook.com/My-Home-Improvement-104306778500105'
						target='_blank'
						rel='noreferrer'
						className='inline-flex flex-col items-center text-[#ee2a7b] hover:text-[#fa7e1e] transition-colors duration-300'
					>
						<IconBrandInstagram size={48} />
						<p>Instagram</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default SocialLinks;
