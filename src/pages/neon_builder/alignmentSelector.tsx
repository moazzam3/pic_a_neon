import { ReactElement, ReactNode } from 'react';

export interface Alignment {
	label: string;
	icon: ReactNode | null;
}
interface AlignBtnProps {
	options: Alignment[];
	value: Alignment;
	onChange: (value: Alignment) => void;
}

const AlignSelector = (props: AlignBtnProps): ReactElement => {
	const { options, value, onChange } = props;
	console.clear();
	console.log(value);
	function getRounded(index: number): string {
		if (index === 0) {
			return 'rounded-tl rounded-bl';
		}
		if (index === options.length - 1) {
			return 'rounded-tr rounded-br';
		}
		return '';
	}

	return (
		<div className='flex'>
			{options.map((item: Alignment, index: number) => {
				return (
					<label
						key={item.label}
						className={`h-10 w-10 p-2 text-white aspect-square cursor-pointer hover:text-primary-500  ${getRounded(index)} ${value.label === item.label ? 'bg-primary-500 hover:text-white' : 'bg-black'}`}
					>
						<input
							type='radio'
              className='visually-hidden'
              checked={value.label === item.label} // ye ni dala hoa tha 
							onChange={() => onChange(item)}
						/>
						{item.icon}
					</label>
				);
			})}
		</div>
	);
};

export default AlignSelector;
