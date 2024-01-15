import { useQuery } from '@tanstack/react-query';
// icons
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';

// project files
import { getFooter } from 'src/constants/services';
import axios from 'src/utils/axios';
import Skeleton from 'src/components/Skeleton';

function SocialLinks() {
	const { isPending, data } = useQuery({
		queryKey: ['footer'],
		queryFn: async () => {
			const response = await axios.get(getFooter);
			return response.data;
		},
	});
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
					{isPending ? (
						<Skeleton className='w-24 h-24' />
					) : (
						<a
							href={data?.links.facebook_link}
							target='_blank'
							rel='noreferrer'
							className='inline-flex flex-col items-center text-[#3b5998] hover:text-[#497bd6] transition-colors duration-300'
						>
							<IconBrandFacebook size={48} />
							<p>Facebook</p>
						</a>
					)}
				</div>
				<div className='flex'>
					{isPending ? (
						<Skeleton className='w-24 h-24' />
					) : (
						<a
							href={data?.links.instagram_link}
							target='_blank'
							rel='noreferrer'
							className='inline-flex flex-col items-center text-[#ee2a7b] hover:text-[#fa7e1e] transition-colors duration-300'
						>
							<IconBrandInstagram size={48} />
							<p>Instagram</p>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default SocialLinks;
