
import { Switch as HeadlessSwitch } from '@headlessui/react';

type Size = 'small' | 'large' | 'medium';

interface SwitchProps {
	size?: Size;
	value: boolean;
	setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Switch(props: SwitchProps) {
	const { size = 'medium',value,setValue } = props;

	// Define a function to calculate the size based on the given value
	const calculateSize = (value: Size) => {
		switch (value) {
			case 'small':
				return { container: 'h-[28px] w-[54px]', ball: 'h-[24px] w-[24px]' };
			case 'large':
				return { container: 'h-[48px] w-[94px]', ball: 'h-[40px] w-[40px]' };
			// Add more size options as needed
			default:
				return { container: 'h-[38px] w-[74px]', ball: 'h-[34px] w-[34px]' }; // Default size
		}
	};

	const sizes = calculateSize(size);

	return (
		<HeadlessSwitch
			checked={value}
			onChange={setValue}
			className={`${value ? 'bg-primary-500' : 'bg-primary-200'}
          relative inline-flex ${
						sizes.container
					} shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
		>
			<span className='sr-only'>Use setting</span>
			<span
				aria-hidden='true'
				className={`${value ? 'translate-x-full' : 'translate-x-0'}
            pointer-events-none inline-block ${
							sizes.ball
						} transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
			/>
		</HeadlessSwitch>
	);
}
