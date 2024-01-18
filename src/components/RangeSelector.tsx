import { useState } from 'react';

interface RangeSelectorProps {
	initialValue?: number[];
	min?: number;
	max?: number;
	step?: number;
	label: string;
}

const RangeSelector: React.FC<RangeSelectorProps> = (props: RangeSelectorProps) => {

  const { initialValue = [0, 100], min = 0, max = 1500, step = 1, label } = props

	const [range, setRange] = useState<number[]>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
		const newValue = parseFloat(event.target.value);
		const newRange = [...range];
		newRange[index] = newValue;
		setRange(newRange);
	};

	return (
		<div className='flex flex-col gap-1'>
			<label className='mr-2'>{label}:</label>
			<div className='flex items-center'>
				<input
					type='range'
					min={min}
					max={max}
					step={step}
					value={range[0]}
					onChange={(e) => handleChange(e, 0)}
					className='w-64 h-2 bg-gray-300 rounded-full focus:outline-none appearance-none'
				/>
				<span className='mx-2 min-w-[30px]'>{range[0]}</span>
				<input
					type='range'
					min={min}
					max={max}
					step={step}
					value={range[1]}
					onChange={(e) => handleChange(e, 1)}
					className='w-64 h-2 bg-gray-300 rounded-full focus:outline-none appearance-none'
				/>
				<span className='ml-2 min-w-[30px]'>{range[1]}</span>
			</div>
		</div>
	);
};

export default RangeSelector;
