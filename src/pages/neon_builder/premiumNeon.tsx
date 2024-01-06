import { useEffect, useState } from 'react';

// component
import Switch from 'src/components/Switch';

// icons
import { IconBolt } from '@tabler/icons-react';

const colors = ['#ff0000', '#00ff00', '#0000ff'];

function PremiumNeon() {
	const [color, setColor] = useState('');
	const [changeColor, setChangeColor] = useState(false);

	useEffect(() => {
		let index = 0;
		const intervalID = setInterval(() => {
			if (changeColor) {
				setColor(colors[index]);
				if (index < colors.length - 1) {
					index++;
					return;
				}
				index = 0;
			}
		}, 1000);

		return () => clearInterval(intervalID);
	}, [changeColor]);

	return (
		<div>
			<div className='flex gap-2'>
				<IconBolt />
				<h3 className='text-xl text-primary-500 uppercase'>
					Premium RGB color changing:
				</h3>
			</div>
			<div className='relative h-64 w-64 aspect-square rounded-md bg-black flex justify-center items-center'>
				<p
					className='text-4xl font-semibold transition-colors'
					style={{ color }}
				>
					NEON
				</p>
				<div className='absolute bottom-0 right-0'>
					<Switch size='small' value={changeColor} setValue={setChangeColor} />
				</div>
			</div>
		</div>
	);
}

export default PremiumNeon;
