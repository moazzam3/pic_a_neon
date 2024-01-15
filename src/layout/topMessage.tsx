import { IconTruckDelivery } from '@tabler/icons-react';
import { IconStarFilled } from '@tabler/icons-react';
import { IconStarHalfFilled } from '@tabler/icons-react';
import { IconShieldCheck } from '@tabler/icons-react';

function TopMessage() {
	return (
		<div className='py-1 px-4 bg-primary-500'>
			<div className='max-container flex justify-between items-center text-xs'>
        <div className='hidden sm:flex gap-2 items-center'>
          <div className='flex'>
            <IconStarFilled size={20} />
            <IconStarFilled size={20} />
            <IconStarFilled size={20} />
            <IconStarFilled size={20} />
            <IconStarHalfFilled size={20} />
          </div>
					<span>4.9 GOOGLE RATING</span>
				</div>
				<div className='flex gap-2 items-center'>
          <IconTruckDelivery size={20} />
					<span>FREE SHIPPING - ALL SIGNS!</span>
				</div>
				<div className='hidden md:flex gap-2 items-center'>
            <IconShieldCheck size={20} />
					<span>2 YEAR WARRANTY</span>
				</div>
			</div>
		</div>
	);
}

export default TopMessage;
