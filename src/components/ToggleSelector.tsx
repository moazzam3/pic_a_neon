import { InputHTMLAttributes, ReactElement } from 'react';

interface ToggleSelectorProps {
	options: string[];
	selected: any;
	setSelected: (selected: any) => void;
	variant?: 'buttoned' | 'tabed';
	className?: string;
	optionToDeselect?: boolean;
	detailedObjects?:boolean
}
function ToggleSelector(props: ToggleSelectorProps): ReactElement {
	const {
		options,
		selected,
		setSelected,
		variant = 'buttoned',
		className,
		optionToDeselect,
	} = props;

	function handleSetSelected(value: string) {
		if (optionToDeselect && value === selected) {
			setSelected('');
			return;
		}
		setSelected(value);
	}

	function getContainerClass() {
		return variant === 'buttoned'
			? 'w-full flex flex-wrap gap-2'
			: 'w-full flex flex-wrap py-3 px-4 rounded-full bg-black';
	}

	return (
		<div
			className={
				getContainerClass() + ' ' + 'overflow-hidden' + ' ' + className
			}
		>
			{options.map((item) => (
				<RadioButton
					className={`${
						variant === 'buttoned'
							? `border px-4 py-2 rounded-md transition-colors cursor-pointer ${
									item === selected
										? 'bg-primary-500 text-white border-primary-500 hover:text-white'
										: 'border-slate-400 text-slate-500 hover:border-primary-500 hover:text-primary-500'
							}`
							: `text-white rounded-full cursor-pointer flex flex-1 w-full p-4 transition-colors justify-center hover:text-white hover:bg-primary-500 ${
									item === selected
										? 'bg-primary-500 hover:text-white'
										: 'bg-transparent'
							}`
					}`}
					key={item}
					checked={item === selected}
					onChange={() => handleSetSelected(item)}
				>
					<span>{item}</span>
				</RadioButton>
			))}
		</div>
	);
}

export default ToggleSelector;

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	checked: boolean;
	children: ReactElement | string;
	className: string;
}

function RadioButton(props: RadioButtonProps): ReactElement {
	const { checked, children, className, ...rest } = props;

	return (
		<label className={className} onClick={()=>window.scrollTo(0, window.scrollY)}>
			<input
				type='radio'
				checked={checked}
				className={`visually-hidden whitespace-nowrap`}
				{...rest}
			/>
			{children}
		</label>
	);
}
