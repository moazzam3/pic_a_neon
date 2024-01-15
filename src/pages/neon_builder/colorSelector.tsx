import { LabelHTMLAttributes, ReactElement } from 'react';
// icons
import { IconBolt } from '@tabler/icons-react';

export interface Color {
	name: string;
	hex: string;
	id: string;
}

interface ColorSelectorProps {
	options: Color[];
	value: Color;
	onChange: (color: Color) => void;
}

function ColorSelector(props: ColorSelectorProps): ReactElement {
	const { options, value, onChange } = props;
	return (
		<div className='flex items-center flex-wrap gap-4'>
			{options.map((item) => (
				<RadioButton
					key={item.id}
					checked={item.id === value.id}
					onChange={() => onChange(item)}
					style={{
						borderColor: item.id === value.id ? value.hex : `transparent`,
						color: item.id === value.id ? '#ffff' : item.hex,
						background: item.id === value.id ? value.hex : `transparent`,
					}}
				>
					<span className='whitespace-nowrap text-sm'>{item.name}</span>
				</RadioButton>
			))}
		</div>
	);
}

export default ColorSelector;

interface RadioButtonProps extends LabelHTMLAttributes<HTMLLabelElement> {
	checked: boolean;
	children: ReactElement | string;
	onChange: () => void;
}
function RadioButton(props: RadioButtonProps): ReactElement {
	const { checked, children, className,onChange, ...rest } = props;

	return (
		<label
			className={`flex flex-col gap-1 items-center cursor-pointer min-w-[60px] min-h-[60px] border p-2 aspect-square rounded ${className}`}
			{...rest}
		>
			<input type='radio' checked={checked} className={`visually-hidden`} onChange={onChange}/>
			<IconBolt size={30} />
			{children}
		</label>
	);
}
