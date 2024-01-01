import { ReactElement, FC, ChangeEvent, ReactNode } from 'react';

export interface Accessory {
	name: string;
	price: string;
}
interface AccessoriesProps {
	options: Accessory[];
	value: Accessory[];
	onChange: (value: Accessory[]) => void;
}

const Accessories: FC<AccessoriesProps> = (props: AccessoriesProps) => {
	const { value, onChange, options } = props;

	function handleChange(
		event: ChangeEvent<HTMLInputElement>,
		newItem: Accessory
	) {
		const { checked } = event.target;
		if (checked) {
			onChange([...value, newItem]);
		} else {
			onChange(value.filter((item) => item.name !== newItem.name));
		}
	}

	return (
		<div className='grid gap-2 grid-cols-3'>
			{options.map((item) => {
				return (
					<CheckboxButton
						key={item.name}
						checked={value.findIndex((i) => i.name === item.name) > -1}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleChange(e, item)
						}
					>
						<div className='flex flex-col gap-1'>
							<span>{item.name}</span>
							<span>{item.price}</span>
						</div>
					</CheckboxButton>
				);
			})}
		</div>
	);
};

export default Accessories;

interface CheckboxButtonProps {
	children: ReactNode;
	checked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxButton(props: CheckboxButtonProps): ReactElement {
	const { children, checked, onChange } = props;
	return (
		<label
			className={`p-2 rounded flex justify-center items-center gap-2 cursor-pointer border hover:border-primary-500 hover:text-primary-500 transition-colors ${
				checked
					? 'text-white border-primary-500 bg-primary-500 hover:text-white'
					: 'border-slate-400 text-slate-500'
			}`}
		>
			<input
				type='checkbox'
				className='visually-hidden'
				checked={checked}
				onChange={onChange}
			/>
			{children}
		</label>
	);
}
