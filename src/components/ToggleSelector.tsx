import { InputHTMLAttributes, ReactElement } from 'react';

interface ToggleSelectorProps {
	options: string[];
	selected: string;
	setSelected: (selected: string) => void;
	variant?: 'buttoned' | 'tabed';
	containerClass?: string;
}
function ToggleSelector(props: ToggleSelectorProps): ReactElement {
	const {
		options,
		selected,
		setSelected,
		variant = 'buttoned',
		containerClass,
	} = props;

	function handleSetSelected(value: string) {
		setSelected(value);
	}

	function getContainerClass() {
		return variant === 'buttoned'
			? 'w-full flex flex-wrap gap-2'
			: 'w-full flex flex-wrap py-3 px-4 rounded-full bg-black';
	}
	function getRadioClass(checked: boolean) {
		return variant === 'buttoned'
			? `border px-4 py-2 rounded-md transition-colors cursor-pointer ${
					checked
						? 'border-primary-500 text-primary-500'
						: 'border-black text-black'
			}`
			: `text-white rounded-full cursor-pointer flex flex-1 w-full p-4 transition-colors justify-center hover:text-white hover:bg-primary-500 ${
					checked ? 'bg-primary-500 hover:text-white' : 'bg-transparent'
			}`;
	}
	return (
		<div
			className={
				getContainerClass() + ' ' + 'overflow-hidden' + ' ' + containerClass
			}
		>
			{options.map((item) => (
				<RadioButton
					radioClass={getRadioClass(item === selected)}
					key={item}
					checked={item === selected}
					onChange={() => handleSetSelected(item)}
				>
					<span className='whitespace-nowrap'>{item}</span>
				</RadioButton>
			))}
		</div>
	);
}

export default ToggleSelector;

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	checked: boolean;
	children: ReactElement | string;
	radioClass: string;
}

function RadioButton(props: RadioButtonProps): ReactElement {
	const { checked, children, className, radioClass, ...rest } = props;

	return (
		<label className={radioClass}>
			<input
				type='radio'
				checked={checked}
				className={`visually-hidden ${className}`}
				{...rest}
			/>
			{children}
		</label>
	);
}
